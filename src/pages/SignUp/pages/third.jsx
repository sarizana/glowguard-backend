import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./third.css";

const Third = () => {
  const [selectedAge, setSelectedAge] = useState(null);
  const navigate = useNavigate();

  const ageGroups = [
    "Under 18",
    "18-24",
    "25-34",
    "35-44",
    "45-54",
    "55+",
  ];

  return (
    <div className="third-container">
      <h2 className="question-title">How old are you?</h2>

      <div className="options-container">
        {ageGroups.map((age, index) => (
          <div
            key={index}
            className={`option ${selectedAge === age ? "selected" : ""}`}
            onClick={() => setSelectedAge(age)}
          >
            {age}
            <span className="radio-button">{selectedAge === age && "●"}</span>
          </div>
        ))}
      </div>

      <p className="privacy-text">
        🔒 Your privacy matters to us. This information is confidential and will only be used to personalize your experience.
      </p>

      <button
        className="continue-button"
        onClick={() => navigate("/signup/fourth")}
        disabled={!selectedAge} // Button disabled until selection
      >
        Continue
      </button>
    </div>
  );
};

export default Third;
