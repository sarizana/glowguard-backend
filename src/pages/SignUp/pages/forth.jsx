import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./forth.css";

const Fourth = () => {
  const [knowledge, setKnowledge] = useState("");
  const navigate = useNavigate();

  const options = [
    { label: "Beginner", description: "I’m just getting started", value: "beginner" },
    { label: "Intermediate", description: "I have a routine and am looking to improve it", value: "intermediate" },
    { label: "Expert", description: "I keep up to date on trending products and ingredients", value: "expert" },
  ];

  return (
    <div className="knowledge-container">
      <h2>What do you know about skincare?</h2>
      <p className="description">This helps us personalize recommendations for you.</p>

      <div className="knowledge-options">
        {options.map((option) => (
          <div
            key={option.value}
            className={`option-button ${knowledge === option.value ? "selected" : ""}`}
            onClick={() => setKnowledge(option.value)}
          >
            <div className="option-title">{option.label}</div>
            {knowledge === option.value && <div className="option-description">{option.description}</div>}
          </div>
        ))}
      </div>

      <div className="button-container">
        <button className="back-button" onClick={() => navigate("/signup/third")}>
          Back
        </button>
        <button className="continue-button" onClick={() => navigate("/signup/fifth")} disabled={!knowledge}>
         Continue
        </button>

      </div>
    </div>
  );
};

export default Fourth;
