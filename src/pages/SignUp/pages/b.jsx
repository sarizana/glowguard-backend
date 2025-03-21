import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./b.css";

const B = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const options = [
    "Still dry",
    "Feels the same",
    "Oily and greasy",
    "Oily in some areas and dry in others",
    "Irritated and uncomfortable",
  ];

  const handleContinue = () => {
    // Store answerB in localStorage
    const storedAnswers = JSON.parse(localStorage.getItem("skinAnswers")) || {};
    storedAnswers.answerB = selected;
    localStorage.setItem("skinAnswers", JSON.stringify(storedAnswers));

    navigate("/signup/c"); // Navigate to question C
  };

  return (
    <div className="question-container">
      <h2>How does your skin feel when you use moisturizer?</h2>

      <div className="question-options">
        {options.map((option) => (
          <div
            key={option}
            className={`option-button ${selected === option ? "selected" : ""}`}
            onClick={() => setSelected(option)}
          >
            {option}
          </div>
        ))}
      </div>

      <div className="button-container">
        <button className="back-button" onClick={() => navigate("/signup/a")}>
          Back
        </button>
        <button className="continue-button" onClick={handleContinue} disabled={!selected}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default B;
