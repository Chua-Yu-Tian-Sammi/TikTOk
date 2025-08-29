import React, { useState } from "react";

const UserInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="user-input flex">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask me anything..."
        className="flex-1 p-2 border rounded"
      />
      <button onClick={handleSend} className="ml-2 p-2 bg-blue-500 text-white rounded">Send</button>
    </div>
  );
};

export default UserInput;
