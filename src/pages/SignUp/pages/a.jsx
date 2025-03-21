import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./a.css";

const A = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const options = [
    "Dry and tight",
    "Oily",
    "Not too dry or oily",
    "Dry in parts, oily in others",
    "Sensitive and irritated",
  ];

  const handleContinue = () => {
    // Store answerA in localStorage
    const storedAnswers = JSON.parse(localStorage.getItem("skinAnswers")) || {};
    storedAnswers.answerA = selected;
    localStorage.setItem("skinAnswers", JSON.stringify(storedAnswers));

    navigate("/signup/b"); // Navigate to question B
  };

  return (
    <div className="question-container">
      <h2>How does your skin feel in the morning?</h2>

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
        <button className="back-button" onClick={() => navigate("/signup/fifth")}>
          Back
        </button>
        <button className="continue-button" onClick={handleContinue} disabled={!selected}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default A;
