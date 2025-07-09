import React, { useState } from 'react';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() === '') return;
    console.log('Send:', message);
    setMessage('');
  };

  return (
    <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-200">
      <input
        className="flex-1 rounded-lg px-4 py-2 bg-[#e6f4ef] text-[#0c1c17] placeholder:text-[#46a080]"
        placeholder="Type a message..."
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend} className="bg-[#46a080] text-white px-4 py-2 rounded-lg">
        Send
      </button>
    </div>
  );
};

export default ChatInput;
