import React, { useState } from "react";
import axios from "axios";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const handleSend = async () => {
    try {
      const res = await axios.post("http://localhost:5000/chat", { message });
      setReply(res.data.reply);
    } catch (error) {
      setReply("Server error or OpenAI issue.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🗨️ Chat with AI</h2>
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
      <div style={{ marginTop: "10px" }}>
        <strong>AI Reply:</strong>
        <p>{reply}</p>
      </div>
    </div>
  );
};

export default ChatBox;
