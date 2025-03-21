import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./second.css";

const Second = () => {
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (gender) {
      navigate("/signup/third"); // Adjust the route for the next step
    }
  };

  return (
    <div className="gender-container">
      <h2>What is your gender?</h2>
      <p className="description">This helps us personalize your skincare recommendations.</p>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="gender-boxes">
          <div
            className={`gender-box ${gender === "male" ? "selected" : ""}`}
            onClick={() => setGender("male")}
          >
            <span className="gender-text">Male</span>
          </div>

          <div
            className={`gender-box ${gender === "female" ? "selected" : ""}`}
            onClick={() => setGender("female")}
          >
            <span className="gender-text">Female</span>
          </div>

          <div
            className={`gender-box ${gender === "other" ? "selected" : ""}`}
            onClick={() => setGender("other")}
          >
            <span className="gender-text">Other</span>
          </div>
        </div>

        <button type="submit" className="next-button" disabled={!gender} onClick={() => navigate("/signup/third")}>
        Next
       </button>
      </form>
    </div>
  );
};

export default Second;
