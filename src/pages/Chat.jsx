import React from 'react';
import MatchList from '../components/Chat/MatchList';
import ChatWindow from '../components/Chat/ChatWindow';

const Chat = () => {
  return (
    <div className="flex min-h-screen bg-[#f8fcfa] font-sans">
      <div className="w-80 border-r border-gray-200">
        <MatchList />
      </div>
      <div className="flex-1">
        <ChatWindow />
      </div>
    </div>
  );
};

export default Chat;


// import { useState } from 'react';
// import {
//   Search,
//   Send,
//   Phone,
//   Video,
//   MoreVertical,
//   ArrowLeft,
//   MessageCircle
// } from 'lucide-react';

// // const mockContacts = [/*...same as before...*/];
// // const mockMessages = [/*...same as before...*/];


// const mockContacts = [
//   {
//     id: '1',
//     name: 'Sarah Chen',
//     profilePicture: 'https://images.unsplash.com/photo-1494790108755-2616b612f2b5?w=400&h=400&fit=crop&crop=face',
//     lastMessage: 'That sounds great! When would you like to start the Python lessons?',
//     lastMessageTime: new Date(Date.now() - 30 * 60 * 1000),
//     unreadCount: 2,
//     skill: 'Python Programming',
//     isOnline: true
//   },
//   {
//     id: '2',
//     name: 'Marcus Rodriguez',
//     profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
//     lastMessage: 'Thanks for the guitar lesson! Same time next week?',
//     lastMessageTime: new Date(Date.now() - 2 * 60 * 60 * 1000),
//     unreadCount: 0,
//     skill: 'Guitar Lessons',
//     isOnline: false
//   },
//   {
//     id: '3',
//     name: 'Emma Thompson',
//     profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
//     lastMessage: 'I can help you with React components this weekend',
//     lastMessageTime: new Date(Date.now() - 24 * 60 * 60 * 1000),
//     unreadCount: 1,
//     skill: 'Photography',
//     isOnline: true
//   }
// ];

// const mockMessages = [
//   {
//     id: '1',
//     senderId: '1',
//     senderName: 'Sarah Chen',
//     content: "Hi! I saw your profile and I'd love to exchange skills with you. I can teach Python and I'm interested in learning UI/UX design.",
//     timestamp: new Date(Date.now() - 60 * 60 * 1000)
//   },
//   {
//     id: '2',
//     senderId: 'me',
//     senderName: 'Me',
//     content: "That's perfect! I've been looking for someone to help me with Python. I have 3+ years of UI/UX experience and would be happy to share what I know.",
//     timestamp: new Date(Date.now() - 45 * 60 * 1000)
//   },
//   {
//     id: '3',
//     senderId: '1',
//     senderName: 'Sarah Chen',
//     content: "Awesome! What's your current Python experience level? Are you completely new or do you have some basics?",
//     timestamp: new Date(Date.now() - 40 * 60 * 1000)
//   },
//   {
//     id: '4',
//     senderId: 'me',
//     senderName: 'Me',
//     content: "I have some basic knowledge - I've done a few online tutorials but I struggle with more complex concepts like classes and APIs.",
//     timestamp: new Date(Date.now() - 35 * 60 * 1000)
//   },
//   {
//     id: '5',
//     senderId: '1',
//     senderName: 'Sarah Chen',
//     content: "That sounds great! When would you like to start the Python lessons?",
//     timestamp: new Date(Date.now() - 30 * 60 * 1000)
//   }
// ]

// const Chat = () => {
//   const [selectedContact, setSelectedContact] = useState(null); // no contact selected by default
//   const [messages, setMessages] = useState(mockMessages);
//   const [newMessage, setNewMessage] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSendMessage = () => {
//     if (newMessage.trim() && selectedContact) {
//       const message = {
//         id: Date.now().toString(),
//         senderId: 'me',
//         senderName: 'Me',
//         content: newMessage.trim(),
//         timestamp: new Date()
//       };
//       setMessages((prev) => [...prev, message]);
//       setNewMessage('');
//     }
//   };

//   const formatTime = (date) => {
//     const now = new Date();
//     const diff = now - date;
//     const minutes = Math.floor(diff / 60000);
//     const hours = Math.floor(diff / 3600000);
//     const days = Math.floor(diff / 86400000);

//     if (minutes < 60) return `${minutes}m ago`;
//     if (hours < 24) return `${hours}h ago`;
//     return `${days}d ago`;
//   };

//   const filteredContacts = mockContacts.filter((contact) =>
//     contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     contact.skill.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="h-screen flex flex-col md:flex-row">
//       {/* Contacts List */}
//       <div className={`w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 ${selectedContact ? 'hidden md:block' : 'block'}`}>
//         <div className="p-4 border-b">
//           <h1 className="text-xl font-bold mb-4">Messages</h1>
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         <div className="overflow-y-auto h-[calc(100vh-96px)]">
//           {filteredContacts.map((contact) => (
//             <div
//               key={contact.id}
//               onClick={() => setSelectedContact(contact)}
//               className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition ${
//                 selectedContact?.id === contact.id ? 'bg-blue-50' : ''
//               }`}
//             >
//               <div className="flex items-center space-x-3">
//                 <div className="relative">
//                   <img
//                     src={contact.profilePicture}
//                     alt={contact.name}
//                     className="w-12 h-12 rounded-full"
//                   />
//                   {contact.isOnline && (
//                     <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
//                   )}
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex justify-between">
//                     <h3 className="font-medium truncate">{contact.name}</h3>
//                     <span className="text-xs text-gray-500">{formatTime(contact.lastMessageTime)}</span>
//                   </div>
//                   <p className="text-xs text-blue-600">{contact.skill}</p>
//                   <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
//                 </div>
//                 {contact.unreadCount > 0 && (
//                   <span className="text-white bg-blue-600 rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                     {contact.unreadCount}
//                   </span>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Chat Area */}
//       <div className={`flex-1 flex flex-col ${!selectedContact ? 'hidden md:flex' : 'flex'}`}>
//         {selectedContact ? (
//           <>
//             {/* Chat Header */}
//             <div className="p-4 border-b flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <button
//                   onClick={() => setSelectedContact(null)}
//                   className="md:hidden p-1"
//                 >
//                   <ArrowLeft className="w-5 h-5" />
//                 </button>
//                 <img
//                   src={selectedContact.profilePicture}
//                   alt={selectedContact.name}
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <div>
//                   <h2 className="font-semibold">{selectedContact.name}</h2>
//                   <p className="text-sm text-blue-600">{selectedContact.skill}</p>
//                 </div>
//               </div>
//               <div className="flex space-x-2">
//                 <Phone className="w-5 h-5 text-gray-500" />
//                 <Video className="w-5 h-5 text-gray-500" />
//                 <MoreVertical className="w-5 h-5 text-gray-500" />
//               </div>
//             </div>

//             {/* Messages */}
//             <div className="flex-1 overflow-y-auto p-4 space-y-4">
//               {messages.map((message) => (
//                 <div
//                   key={message.id}
//                   className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div
//                     className={`max-w-xs px-4 py-2 rounded-lg ${
//                       message.senderId === 'me'
//                         ? 'bg-blue-600 text-white'
//                         : 'bg-gray-100 text-black'
//                     }`}
//                   >
//                     <p className="text-sm">{message.content}</p>
//                     <p className={`text-xs mt-1 ${message.senderId === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>
//                       {formatTime(message.timestamp)}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Input */}
//             <div className="p-4 border-t">
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="text"
//                   placeholder="Type a message..."
//                   value={newMessage}
//                   onChange={(e) => setNewMessage(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                   className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button
//                   onClick={handleSendMessage}
//                   disabled={!newMessage.trim()}
//                   className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50"
//                 >
//                   <Send className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div className="flex-1 flex items-center justify-center text-gray-400">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
//                 <MessageCircle className="h-8 w-8" />
//               </div>
//               <p className="text-lg font-medium">Select a conversation</p>
//               <p className="text-sm">Tap a contact to start chatting</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Chat;


