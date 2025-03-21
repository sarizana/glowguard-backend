import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./skintype.css";

const Skintype = () => {
  const navigate = useNavigate();
  const [skinType, setSkinType] = useState("");

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("skinAnswers")) || {};
    const { answerA, answerB, answerC } = storedAnswers;

    if (!answerA || !answerB || !answerC) {
      navigate("/signup/c"); // Redirect back if answers are missing
      return;
    }

    // Determine skin type based on answers
    if (
      answerA === "Oily" &&
      (answerB === "Oily and greasy" || answerB === "Oily in some areas and dry in others") &&
      answerC === "Often"
    ) {
      setSkinType("Oily");
    } else if (
      (answerA === "Dry and tight" || answerA === "Sensitive and irritated") &&
      (answerB === "Still dry" || answerB === "Feels the same") &&
      (answerC === "Often" || answerC === "Only in certain areas")
    ) {
      setSkinType("Dry");
    } else if (
      answerA === "Not too dry or oily" &&
      answerB === "Feels the same" &&
      (answerC === "Not very often" || answerC === "Almost never")
    ) {
      setSkinType("Normal");
    } else if (
      (answerA === "Dry in parts, oily in others" || answerA === "Not too dry or oily") &&
      (answerB === "Oily in some areas and dry in others" || answerB === "Feels the same") &&
      answerC === "Only in certain areas"
    ) {
      setSkinType("Combination");
    } else {
      setSkinType("Sensitive");
    }
  }, [navigate]);

  return (
    <div className="skintype-container">
      <h2>Your skin type is</h2>
      <div className="result-card">
        <span className="skin-type">{skinType}</span>
        <p className="explanation">What does this mean?</p>
        <p className="description">
          {skinType === "Oily"
            ? "Your skin produces an above-average amount of oil."
            : skinType === "Dry"
            ? "Your skin lacks moisture and tends to feel tight."
            : skinType === "Normal"
            ? "Your skin is balanced, not too oily or dry."
            : skinType === "Combination"
            ? "Your skin has both oily and dry areas."
            : "Your skin is prone to irritation and sensitivity."}
        </p>
      </div>

      <button className="continue-button" onClick={() => navigate("/signup/seventh")}>
        Continue
      </button>
    </div>
  );
};

export default Skintype;
