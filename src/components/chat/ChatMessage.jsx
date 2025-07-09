// ChatMessage.jsx
import React from 'react';

const ChatMessage = ({ sender, type, text }) => {
  const isOutgoing = type === 'outgoing';
  return (
    <div className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'} items-end gap-2`}>
      {!isOutgoing && (
        <div className="w-10 h-10 rounded-full bg-gray-300 shrink-0" />
      )}
      <div className={`max-w-sm px-4 py-2 rounded-lg ${isOutgoing ? 'bg-[#019863] text-white' : 'bg-[#e6f4ef] text-[#0c1c17]'}`}>
        <p className="text-sm">{text}</p>
      </div>
      {isOutgoing && (
        <div className="w-10 h-10 rounded-full bg-gray-400 shrink-0" />
      )}
    </div>
  );
};

export default ChatMessage;
