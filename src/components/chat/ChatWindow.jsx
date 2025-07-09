import React from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ChatWindow = () => {
  return (
    <div className="flex flex-col h-full">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default ChatWindow;
