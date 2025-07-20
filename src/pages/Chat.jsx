import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Search, Send, Phone, Video, MoreVertical, ArrowLeft, MessageCircle
} from 'lucide-react';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_API_URL, {
  withCredentials: true
});

const Chat = () => {
  const { partnerId } = useParams();
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/chat/contacts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setContacts(res.data);
    } catch (err) {
      console.error('Failed to load contacts', err);
    }
  };

  const fetchMessages = async (id) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/chat/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setMessages(res.data);
    } catch (err) {
      console.error('Failed to load messages', err);
    }
  };

  // Helper function to get profile image URL
  const getProfileImageUrl = (contact) => {
    // Handle both profilePicture and profileImage properties
    const imageField = contact.profilePicture || contact.profileImage;
    if (!imageField) return null;
    
    // If it's already a full URL, return as-is
    if (imageField.startsWith('http')) return imageField;
    
    // If it starts with /, it's a relative path from API
    if (imageField.startsWith('/')) return `${import.meta.env.VITE_API_URL}${imageField}`;
    
    // Otherwise, prepend the API URL
    return `${import.meta.env.VITE_API_URL}/${imageField}`;
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      socket.emit('join', userId);
    }

    return () => {
      socket.off('join');
    };
  }, []);

  useEffect(() => {
    const handleIncomingMessage = (message) => {
      const userId = localStorage.getItem('userId');

      if (selectedContact && selectedContact._id === message.sender) {
        setMessages((prev) => [...prev, message]);
      }

      setContacts((prev) =>
        prev.map((contact) =>
          contact._id === message.sender
            ? {
                ...contact,
                lastMessage: message.content,
                lastMessageTime: message.createdAt
              }
            : contact
        )
      );
    };

    socket.on('newMessage', handleIncomingMessage);

    return () => socket.off('newMessage', handleIncomingMessage);
  }, [selectedContact]);

  // Auto-scroll on message update
  useEffect(() => {
    const chatContainer = document.querySelector('.chat-scroll-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  // Typing Indicator
  useEffect(() => {
    socket.on('userTyping', (fromUserId) => {
      if (selectedContact?._id === fromUserId) {
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 1000);
      }
    });

    return () => {
      socket.off('userTyping');
    };
  }, [selectedContact]);

  useEffect(() => {
    if (!contacts.length) {
      fetchContacts();
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0 && partnerId) {
      const matched = contacts.find((c) => c._id === partnerId);
      if (matched) {
        setSelectedContact(matched);
        fetchMessages(partnerId);
      }
    }
  }, [contacts, partnerId]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedContact) return;

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/chat`,
        {
          receiverId: selectedContact._id,
          content: newMessage
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      setMessages((prev) => [...prev, res.data]);
      setNewMessage('');

      socket.emit('sendMessage', {
        senderId: localStorage.getItem('userId'),
        receiverId: selectedContact._id,
        content: newMessage
      });
    } catch (err) {
      console.error('Message send failed', err);
    }
  };

  const formatTime = (date) => {
    const d = new Date(date);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className={`w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 ${selectedContact ? 'hidden md:block' : 'block'}`}>
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold mb-4">Messages</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-96px)]">
          {filteredContacts.map((contact) => {
            const profileImageUrl = getProfileImageUrl(contact);
            
            return (
              <div
                key={contact._id}
                onClick={() => {
                  setSelectedContact(contact);
                  navigate(`/user/chat/${contact._id}`);
                }}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition ${selectedContact?._id === contact._id ? 'bg-blue-50' : ''}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative inline-block">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                      {profileImageUrl ? (
                        <img 
                          src={profileImageUrl} 
                          alt={contact.name} 
                          className="w-full h-full object-cover" 
                          onError={(e) => {
                            // Fallback to initials if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className={`w-full h-full flex items-center justify-center text-white text-lg font-bold ${profileImageUrl ? 'hidden' : 'flex'}`}>
                        {contact?.name?.charAt(0)?.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium truncate">{contact.name}</h3>
                      <span className="text-sm text-gray-600 truncate">
                        {contact.lastMessageTime ? formatTime(contact.lastMessageTime) : ''}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{contact.lastMessage || 'No messages yet'}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Chat Area */}
      <div className={`flex-1 flex flex-col ${!selectedContact ? 'hidden md:flex' : 'flex'}`}>
        {selectedContact ? (
          <>
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button onClick={() => setSelectedContact(null)} className="md:hidden p-1">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="relative inline-block">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                    {(() => {
                      const profileImageUrl = getProfileImageUrl(selectedContact);
                      return profileImageUrl ? (
                        <img 
                          src={profileImageUrl} 
                          alt={selectedContact.name} 
                          className="w-full h-full object-cover" 
                          onError={(e) => {
                            // Fallback to initials if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null;
                    })()}
                    <div className={`w-full h-full flex items-center justify-center text-white text-lg font-bold ${getProfileImageUrl(selectedContact) ? 'hidden' : 'flex'}`}>
                      {selectedContact?.name?.charAt(0)?.toUpperCase()}
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="font-medium">{selectedContact.name}</h2>
                  <p className="text-sm text-gray-500">Active now</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Phone className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                <Video className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
                <MoreVertical className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-scroll-container">
              {messages.map((msg) => {
                const isMe = msg.sender === localStorage.getItem('userId');
                return (
                  <div key={msg._id || Math.random()} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs px-4 py-2 rounded-lg ${isMe ? 'bg-blue-600 text-white' : 'bg-gray-100 text-black'}`}>
                      <p className="text-sm">{msg.content}</p>
                      <p className={`text-xs mt-1 ${isMe ? 'text-blue-100' : 'text-gray-500'}`}>
                        {formatTime(msg.createdAt)}
                      </p>
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="text-sm text-gray-400">
                  {selectedContact?.name} is typing...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => {
                    setNewMessage(e.target.value);
                    socket.emit('typing', { to: selectedContact._id });
                  }}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8" />
              </div>
              <p className="text-lg font-medium">Select a conversation</p>
              <p className="text-sm">Tap a contact to start chatting</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;