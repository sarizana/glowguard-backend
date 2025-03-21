import React, { useState, useRef } from "react";
import { FaPaperPlane, FaPlus, FaCamera, FaUpload, FaTimes } from "react-icons/fa";
import "./AiChat.css";
import AiSidebar from "../Ai/AiSidebar"; // ✅ Sidebar
import logo from "../../assets/logo.png"; // ✅ AI Bot logo

const AiChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showUploadMenu, setShowUploadMenu] = useState(false);
  const [capturing, setCapturing] = useState(false);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      const newMessages = [...messages, { text: input, sender: "user" }];
      setMessages(newMessages);
      setInput("");
      setLoading(true); // ✅ Show loading animation

      setTimeout(() => {
        setMessages([...newMessages, { text: "Thanks for asking!", sender: "ai" }]);
        setLoading(false); // ✅ Remove loading state after response
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

  const handleCapturePhoto = async () => {
    setCapturing(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const handleTakePhoto = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
    const capturedImage = canvasRef.current.toDataURL("image/png");
    setImage(capturedImage);
    handleCloseCamera(); // ✅ Close camera after capture
  };

  const handleCloseCamera = () => {
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop()); // ✅ Stop camera stream
    }
    setCapturing(false);
  };

  return (
    <div className="ai-chat-container">
      {/* ✅ Sidebar */}
      <AiSidebar />

      {/* Chat Section */}
      <div className="chat-section">
        <h2>AI Skin Analyzer</h2>

        {/* White Chat Box */}
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === "user" ? "user-msg-container" : "ai-msg-container"}>
              {msg.sender === "ai" && <img src={logo} alt="Bot" className="ai-icon" />}
              <div className={msg.sender === "user" ? "user-msg" : "ai-msg"}>{msg.text}</div>
            </div>
          ))}
          {loading && (
            <div className="ai-msg-container">
              <img src={logo} alt="Bot" className="ai-icon" />
              <div className="ai-msg loading-msg">
                <div className="loading-line long"></div> {/* ✅ Increased width */}
                <div className="loading-line short"></div>
              </div>
            </div>
          )}
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

          {/* Upload & Capture Dropup Button */}
          <div className="upload-dropdown">
            <button className="upload-btn" onClick={() => setShowUploadMenu(!showUploadMenu)}>
              <FaPlus />
            </button>
            {showUploadMenu && (
              <div className="upload-menu">
                <button onClick={() => fileInputRef.current.click()}>
                  <FaUpload /> Upload Image
                </button>
                <button onClick={handleCapturePhoto}>
                  <FaCamera /> Capture Photo
                </button>
              </div>
            )}
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} hidden />
          </div>

          {/* Send Button */}
          <button className="send-btn" onClick={handleSendMessage}>
            <FaPaperPlane />
          </button>
        </div>
      </div>

      {/* ✅ Chat History */}
      <div className="chat-history">
        <h3>Chat History</h3>
        <div className="history-item">How to reduce acne?</div>
        <div className="history-item">Best moisturizer for dry skin?</div>
        <div className="history-item">How to remove dark spots?</div>
        <div className="history-item">Can AI analyze my skin?</div>
      </div>

      {/* ✅ Camera Capture Modal */}
      {capturing && (
        <div className="capture-modal">
          <button className="close-btn" onClick={handleCloseCamera}>
            <FaTimes />
          </button>
          <video ref={videoRef} autoPlay playsInline></video>
          <button className="capture-btn" onClick={handleTakePhoto}>Take Photo</button>
          <canvas ref={canvasRef} width="640" height="480" hidden></canvas>
        </div>
      )}
    </div>
  );
};

export default AiChat;
