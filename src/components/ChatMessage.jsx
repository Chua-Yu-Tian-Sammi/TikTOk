import React from "react";
import InteractiveCard from "./InteractiveCard";

const ChatMessage = ({ message }) => {
  return (
    <div className={`message my-2 ${message.type === "user" ? "text-right" : "text-left"}`}>
      <div className="inline-block p-2 rounded bg-white shadow">
        <p>{message.text}</p>
        {message.interactive && <InteractiveCard data={message.interactive} />}
      </div>
    </div>
  );
};

export default ChatMessage;
