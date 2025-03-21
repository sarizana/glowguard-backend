import React, { useState } from "react";
import "./Feedback.css";
import { FaCommentDots } from "react-icons/fa";

const Feedback = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("somahassan875@gmail.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback sent! Thank you.");
    setShowModal(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button className="feedback-btn" onClick={() => setShowModal(true)}>
        <FaCommentDots /> Feedback
      </button>

      {/* Feedback Modal */}
      {showModal && (
        <div className="feedback-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="feedback-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Have feedback?</h2>
            <p>We'd love to hear it!</p>
            <form onSubmit={handleSubmit}>
              <label>Enter your message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                required
              ></textarea>
              <label>How can we reach you?</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Feedback;
