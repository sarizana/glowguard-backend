import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./DoctorChat.css";
import Navbar from "../../components/Navbar";  // ✅ Import Navbar
import Footer from "../../components/Footer";  // ✅ Import Footer
import docImage from "../../assets/doc.jpg";
import doc1Image from "../../assets/doc1.jpg";
import doc2Image from "../../assets/doc2.jpg";
import doctorImage from "../../assets/doctor.jpg";

// Sample doctors' data
const experts = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    image: docImage,
  },
  {
    id: 2,
    name: "Dr. Michael Smith",
    image: doc1Image,
  },
  {
    id: 3,
    name: "Dr. Emily Brown",
    image: doc2Image,
  },
  {
    id: 4,
    name: "Dr. Alex Carter",
    image: doctorImage,
  },
];

const DoctorChat = () => {
  const { id } = useParams();
  const doctor = experts.find((expert) => expert.id === parseInt(id));

  const [messages, setMessages] = useState([
    { text: "Hi! How can I assist you today?", sender: "doctor" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <>
      <Navbar />  {/* ✅ Ensure Navbar appears */}
      <div className="chat-container">
        {/* Chat Header with Doctor's Profile */}
        <div className="chat-header">
          <img src={doctor?.image} alt={doctor?.name} className="chat-doctor-image" />
          <span className="chat-doctor-name">{doctor?.name}</span>
        </div>

        {/* Chat Messages */}
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
      <Footer />  {/* ✅ Ensure Footer appears */}
    </>
  );
};

export default DoctorChat;
