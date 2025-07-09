// ChatMessages.jsx
import React from 'react';
import ChatMessage from './ChatMessage';

const messages = [
  { sender: 'Sophia Carter', type: 'incoming', text: "Hi there! I'm excited to start our photography exchange." },
  { sender: 'You', type: 'outgoing', text: "Hey Sophia! I'm into landscape photography. How about you?" },
  { sender: 'Sophia Carter', type: 'incoming', text: "I love portrait photography. Maybe we can learn from each other." },
  { sender: 'You', type: 'outgoing', text: "Definitely! When would you like to start?" }
];

const ChatMessages = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg, i) => (
        <ChatMessage key={i} sender={msg.sender} type={msg.type} text={msg.text} />
      ))}
    </div>
  );
};

export default ChatMessages;
