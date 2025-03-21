import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./seventh.css";

const Seventh = () => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const navigate = useNavigate();

  const preferences = [
    { name: "Fragrance-Free", icon: "🧴", description: "Avoids perfumes that may trigger allergies." },
    { name: "Alcohol-Free", icon: "🍶", description: "No alcohol, which can dry out or irritate sensitive skin." },
    { name: "Fungal Acne-Safe", icon: "🍄", description: "Free from ingredients that may cause breakouts." },
    { name: "Paraben-Free", icon: "🌟", description: "No parabens, which some people react to." },
    { name: "Sulfate-Free", icon: "⚡", description: "No sulfates, which may strip skin moisture." },
    { name: "Cruelty-Free", icon: "🐰", description: "Not tested on animals – ethical but not allergy-related." },
    { name: "Silicone-Free", icon: "🪨", description: "No silicones, which some find clog pores." },
  ];

  const toggleSelection = (preference) => {
    setSelectedPreferences((prev) =>
      prev.includes(preference) ? prev.filter((p) => p !== preference) : [...prev, preference]
    );
  };

  const handleContinue = () => {
    localStorage.setItem("userPreferences", JSON.stringify(selectedPreferences));
    navigate("/signup/loading"); // Navigate to loading screen before final screen
  };

  return (
    <div className="question-container">
      <h2>Do you have any ingredient allergies or sensitivities?</h2>
      <p className="description">
        Some skincare ingredients can cause irritation or allergic reactions. Let us know if you prefer to avoid certain
        ingredients so we can recommend the safest products for you!
      </p>

      <div className="question-options">
        {preferences.map((pref) => (
          <div
            key={pref.name}
            className={`option-button ${selectedPreferences.includes(pref.name) ? "selected" : ""}`}
            onClick={() => toggleSelection(pref.name)}
          >
            {pref.icon} {pref.name}
            <p className="option-description">{selectedPreferences.includes(pref.name) ? pref.description : ""}</p>
          </div>
        ))}
      </div>

      <div className="button-container">
        <button className="back-button" onClick={() => navigate("/signup/skintype")}>
          Back
        </button>
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Seventh;
