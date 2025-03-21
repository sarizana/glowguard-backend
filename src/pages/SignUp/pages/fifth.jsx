import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fifth.css";

const Fifth = () => {
  const [selection, setSelection] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (selection === "find") {
      navigate("/signup/a"); // Navigate to the quiz if "Find my skin type" is selected
    } else if (selection === "know") {
      navigate("/signup/sixth"); // Navigate to sixth.jsx for manual selection
    }
  };

  return (
    <div className="skin-type-container">
      <h2>Let’s figure out your skin type</h2>

      <div className="skin-type-options">
        <button className={`option-button light ${selection === "know" ? "selected" : ""}`} onClick={() => setSelection("know")}>
          I know my skin type
        </button>
        <button className={`option-button dark ${selection === "find" ? "selected" : ""}`} onClick={() => setSelection("find")}>
          Find my skin type
        </button>
      </div>

      <div className="button-container">
        <button className="back-button" onClick={() => navigate("/signup/fourth")}>
          Back
        </button>
        <button className="continue-button" onClick={handleNext} disabled={!selection}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Fifth;
