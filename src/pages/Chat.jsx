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
