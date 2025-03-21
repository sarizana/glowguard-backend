import React from "react";
import "./FeedbackSection.css";
import feedbackImage from "../../../assets/image-removebg-preview (1).png"; 
import profileImage from "../../../assets/profile.jpg"; // ✅ Import the profile image

const feedbackData = [
  { id: 1, text: "The website is beautifully designed and easy to navigate." },
  { id: 2, text: "I love the AI skincare recommendations, very accurate!" },
  { id: 3, text: "The expert consultation feature is super helpful!" },
  { id: 4, text: "The articles are well-written and informative." },
  { id: 5, text: "I found my perfect skincare routine with this site!" },
];

const FeedbackSection = () => {
  return (
    <section className="feedback-section">
      <div className="feedback-header">
        <h2>Feedback</h2>
      </div>
      <div className="feedback-container">
        <div className="feedback-image">
          <img src={feedbackImage} alt="Feedback" />
        </div>
        <div className="feedback-list">
          {feedbackData.map((feedback, index) => (
            <div key={feedback.id} className={`feedback-item feedback-item-${index + 1}`}>
              <div className="feedback-avatar">
                <img src={profileImage} alt="User" className="avatar-image" />
              </div>
              <p className="feedback-text">{feedback.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="feedback-cta">
        <button className="add-feedback-button" onClick={() => alert("Navigate to Feedback Page!")}>
          Add Your Feedback
        </button>
      </div>
    </section>
  );
};

export default FeedbackSection;
