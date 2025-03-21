import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./c.css";

const C = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const options = [
    "Often",
    "Only with certain products",
    "Only in certain areas",
    "Not very often",
    "Almost never",
  ];

  const handleContinue = () => {
    // Store answerC in localStorage
    const storedAnswers = JSON.parse(localStorage.getItem("skinAnswers")) || {};
    storedAnswers.answerC = selected;
    localStorage.setItem("skinAnswers", JSON.stringify(storedAnswers));

    navigate("/signup/skintype"); // Navigate to skintype.jsx
  };

  return (
    <div className="question-container">
      <h2>How often do you experience dry or flaky skin?</h2>

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
        <button className="back-button" onClick={() => navigate("/signup/b")}>
          Back
        </button>
        <button className="continue-button" onClick={handleContinue} disabled={!selected}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default C;
