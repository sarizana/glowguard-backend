import React, { useState } from "react";
import "./Concerns.css";

const Concerns = () => {
  const [selectedConcerns, setSelectedConcerns] = useState([]);
  const [noneSelected, setNoneSelected] = useState(false);
  const [showAll, setShowAll] = useState(false); // Track if "Show More" is clicked

  const allConcerns = [
    "Acne", "Pores", "Texture", "Dullness", "Sensitivity",
    "Hormonal Acne", "Fungal Acne", "Fine Lines", "Wrinkles",
    "Redness", "Rosacea", "Eczema", "Dryness", "Dark Spots",
    "Oiliness", "Seborrheic Dermatitis"
  ];

  const visibleConcerns = showAll ? allConcerns : allConcerns.slice(0, 5);

  const toggleConcern = (concern) => {
    if (noneSelected) {
      setNoneSelected(false); // Uncheck "None of these concerns" if selecting a concern
    }

    setSelectedConcerns(prev =>
      prev.includes(concern)
        ? prev.filter(item => item !== concern) // Remove if already selected
        : [...prev, concern] // Add to selected concerns
    );
  };

  const toggleNone = () => {
    if (!noneSelected) {
      setSelectedConcerns([]); // Clear concerns if selecting "None"
    }
    setNoneSelected(!noneSelected);
  };

  return (
    <div className="concerns-container">
      <h3>Concerns</h3>
      <div className="concerns-list">
        {visibleConcerns.map((concern, index) => (
          <label key={index} className={`concern-item ${selectedConcerns.includes(concern) ? "checked" : ""}`}>
            <input
              type="checkbox"
              checked={selectedConcerns.includes(concern)}
              onChange={() => toggleConcern(concern)}
            />
            <span className="concern-text">{concern}</span>
          </label>
        ))}
      </div>

      {/* ✅ Show More Concerns Button Works Correctly */}
      <button className="show-more" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "Show All Concerns"}
      </button>

      {/* ✅ Only one "None of these concerns" checkbox */}
      <div className="none-option">
        <input
          type="checkbox"
          id="no-concerns"
          checked={noneSelected}
          onChange={toggleNone}
        />
        <label htmlFor="no-concerns">None of these concerns</label>
      </div>
    </div>
  );
};

export default Concerns;
