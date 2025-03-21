import React, { useState } from "react";
import { FaCamera, FaUpload, FaPaperPlane } from "react-icons/fa";
import "./AiPage.css";

const AiPage = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(null);

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      const newMessages = [...messages, { text: input, sender: "user" }];
      setMessages(newMessages);
      setInput("");

      setTimeout(() => {
        setMessages([...newMessages, { text: "Thanks for asking!", sender: "ai" }]);
      }, 1000);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="ai-chat-container">
      {/* Chat History */}
      <div className="chat-history">
        <h3>Chat History</h3>
        <div className="history-item">How to reduce acne?</div>
        <div className="history-item">Best moisturizer for dry skin?</div>
        <div className="history-item">How to remove dark spots?</div>
        <div className="history-item">Can AI analyze my skin?</div>
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        <h2>AI Skin Analyzer</h2>
        <p>Upload or capture an image & ask AI about your skincare.</p>

        {/* White Chat Box */}
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === "user" ? "user-msg" : "ai-msg"}>
              {msg.text}
            </div>
          ))}
          {image && <div className="image-preview"><img src={image} alt="Uploaded Preview" /></div>}
        </div>

        {/* Input & Send Button */}
        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Ask AI about skincare..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="send-btn" onClick={handleSendMessage}>
            <FaPaperPlane />
          </button>
        </div>

        {/* Upload & Capture Buttons */}
        <div className="upload-buttons">
          <label className="upload-btn">
            <FaUpload /> Upload Image
            <input type="file" accept="image/*" onChange={handleImageUpload} hidden />
          </label>
          <button className="capture-btn">
            <FaCamera /> Capture Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiPage;
