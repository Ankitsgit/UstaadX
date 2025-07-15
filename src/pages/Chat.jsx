// import React from 'react';
// import MatchList from '../components/Chat/MatchList';
// import ChatWindow from '../components/Chat/ChatWindow';

// const Chat = () => {
//   return (
//     <div className="flex min-h-screen bg-[#f8fcfa] font-sans">
//       <div className="w-80 border-r border-gray-200">
//         <MatchList />
//       </div>
//       <div className="flex-1">
//         <ChatWindow />
//       </div>
//     </div>
//   );
// };

// export default Chat;


import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Search,
  Send,
  Phone,
  Video,
  MoreVertical,
  ArrowLeft,
  MessageCircle
} from 'lucide-react';
import axios from 'axios';

const Chat = () => {
  const { partnerId } = useParams();
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // 🔄 Fetch contacts
  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/chat/contacts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      // console.log(res.data);
      setContacts(res.data);
    } catch (err) {
      console.error('Failed to load contacts', err);
    }
  };

  // 🔄 Fetch messages with selected user
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

  useEffect(() => {
    fetchContacts();
  }, []);

  // 📌 Auto-load conversation on route change
  useEffect(() => {
    if (partnerId && contacts.length > 0) {
      const partner = contacts.find((c) => c._id === partnerId);
      if (partner) {
        setSelectedContact(partner);
        fetchMessages(partnerId);
      }
    }
  }, [partnerId, contacts]);

  // ✉️ Send new message
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
    } catch (err) {
      console.error('Message send failed', err);
    }
  };

  // Format time
  const formatTime = (date) => {
    const d = new Date(date);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Contacts Sidebar */}
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
          {filteredContacts.map((contact) => (
            <div
              key={contact._id}
              onClick={() => {
                setSelectedContact(contact);
                navigate(`/user/chat/${contact._id}`);
              }}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition ${selectedContact?._id === contact._id ? 'bg-blue-50' : ''}`}
            >
              <div className="flex items-center space-x-3">
                {/* <img
                
                  src={contact.name.charAt(0) }
                  // alt={contact.name}
                  className="w-12 h-12 rounded-full"
                /> */}
                <div className="relative inline-block">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                       {contact?.profilePicture ? (
                       <img src={contact.profilePicture} alt={contact.name} className="w-full h-full object-cover" />
                       ) : (
                       <div className="w-full h-full flex items-center justify-center text-white text-3lg font-bold">
                           {contact?.name?.charAt(0)}
                      </div>
                      )}
                    </div>  
                </div>              
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium truncate">{contact.name}</h3>
                    <span className="text-sm text-gray-600 truncate">
                      {contact.lastMessageTime ? formatTime(contact.lastMessageTime) : ''}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{contact.lastMessage|| 'No messages yet'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className={`flex-1 flex flex-col ${!selectedContact ? 'hidden md:flex' : 'flex'}`}>
        {selectedContact ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button onClick={() => setSelectedContact(null)} className="md:hidden p-1">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                {/* <img
                  src={selectedContact.profilePicture || 'https://via.placeholder.com/150'}
                  alt={selectedContact.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="font-semibold">{selectedContact.name}</h2>
                </div> */}
                <div className="relative inline-block">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                       {selectedContact?.profilePicture ? (
                       <img src={selectedContact.profilePicture} alt={selectedContact.name} className="w-full h-full object-cover" />
                       ) : (
                       <div className="w-full h-full flex items-center justify-center text-white text-3lg font-bold">
                           {selectedContact?.name?.charAt(0)}
                      </div>
                      
                      )}
                    </div>  
                </div>                     
              </div>
              <div className="flex space-x-2">
                <Phone className="w-5 h-5 text-gray-500" />
                <Video className="w-5 h-5 text-gray-500" />
                <MoreVertical className="w-5 h-5 text-gray-500" />
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => {
                const isMe = msg.sender === localStorage.getItem('userId');
                return (
                  <div key={msg._id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        isMe ? 'bg-blue-600 text-white' : 'bg-gray-100 text-black'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                      <p className={`text-xs mt-1 ${isMe ? 'text-blue-100' : 'text-gray-500'}`}>
                        {formatTime(msg.createdAt)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input Box */}
            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
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



