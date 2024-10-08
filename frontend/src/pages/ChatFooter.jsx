import React, { useState, useContext } from "react";
import { userContext } from "../hooks/userContext";

function ChatFooter({ socket }) {
  const [message, setMessage] = useState("");
  const { userName } = useContext(userContext);

  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit("sendMessage", {
      userName,
      socketID: socket.id,
      message,
    });
    setMessage("");
  };

  return (
    <div className="chat__footer">
      <div className="form">
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="button" className="sendBtn" onClick={handleSendMessage}>
          SEND
        </button>
      </div>
    </div>
  );
}

export default ChatFooter;
