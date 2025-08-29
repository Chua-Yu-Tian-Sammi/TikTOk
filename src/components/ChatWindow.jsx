import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import UserInput from "./UserInput";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (userMessage) => {
    setMessages([...messages, { type: "user", text: userMessage }]);

    // Call AI service
    const aiReply = await fetchAIResponse(userMessage, messages);
    setMessages((prev) => [...prev, { type: "ai", text: aiReply.text, interactive: aiReply.interactive }]);
  };

  return (
    <div className="chat-window p-4 bg-gray-100 h-screen flex flex-col">
      <div className="messages flex-1 overflow-auto mb-4">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
      </div>
      <UserInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
