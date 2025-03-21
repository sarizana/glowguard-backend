import React from "react";
import { useNavigate } from "react-router-dom";
import "./final.css"; // Import styles if needed

const Final = () => {
  const navigate = useNavigate();

  return (
    <div className="final-container">
      <h2>🎉 Congrats! Your custom skin profile is ready. 🎉</h2>
      <p>Your profile is now set up and ready to explore!</p>

      <button className="continue-button" onClick={() => navigate("/profile")}>
        Get Started
      </button>
    </div>
  );
};

export default Final;
