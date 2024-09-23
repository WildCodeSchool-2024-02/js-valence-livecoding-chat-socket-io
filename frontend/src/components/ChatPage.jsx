import React, { useState } from "react";
import ChatBar from "../pages/ChatBar";
import ChatBody from "../pages/ChatBody";
import ChatFooter from "../pages/ChatFooter";

function ChatPage({ socket }) {
  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody socket={socket} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
}

export default ChatPage;
