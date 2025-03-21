import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sixth.css";

const Sixth = () => {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const skinTypes = ["Normal", "Dry", "Oily", "Combination", "Sensitive"];

  const handleContinue = () => {
    localStorage.setItem("userSkinType", selected);
    navigate("/signup/seventh"); // Navigate to the next question
  };

  return (
    <div className="question-container">
      <h2>Got it! What's your skin type?</h2>

      <div className="question-options">
        {skinTypes.map((type) => (
          <div
            key={type}
            className={`option-button ${selected === type ? "selected" : ""}`}
            onClick={() => setSelected(type)}
          >
            {type}
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

export default Sixth;
