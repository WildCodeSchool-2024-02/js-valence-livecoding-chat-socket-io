import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ChatBody({ socket }) {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    socket.on("newMessage", (messages) => {
      setChatMessages([...chatMessages, messages]);
    });
  }, [chatMessages]);

  const navigate = useNavigate();

  const handleLeaveChat = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Workshop socket.io</p>
        <button
          type="button"
          className="leaveChat__btn"
          onClick={handleLeaveChat}
        >
          LEAVE CHAT
        </button>
      </header>

      {/* message envoyé par vous */}
      <div className="message__container">
        {chatMessages.map((message, index) => (
          /* eslint-disable react/no-array-index-key */
          <div className="message__chats" key={index}>
            {message.socketID === socket.id ? (
              <>
                <p className="sender__name">You</p>
                <div className="message__sender">
                  <p>{message.message}</p>
                </div>
              </>
            ) : (
              <>
                <p>{message.userName}</p>
                <div className="message__recipient">
                  <p>{message.message}</p>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Quand je tape un message */}
        <div className="message__status">
          <p>Someone is typing...</p>
        </div>
      </div>
    </>
  );
}

export default ChatBody;
