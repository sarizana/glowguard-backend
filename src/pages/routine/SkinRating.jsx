import React, { useState } from "react";
import "./SkinRating.css";

const SkinRating = () => {
  const [selectedRating, setSelectedRating] = useState(null);

  const ratings = [
    { label: "bad", color: "#F8B9B7", icon: "😞" },
    { label: "meh", color: "#FCE8A9", icon: "😐" },
    { label: "okay", color: "#FCE8A9", icon: "🙂" },
    { label: "good", color: "#C8E6C9", icon: "😊" },
    { label: "great", color: "#A5D6A7", icon: "😁" },
  ];

  return (
    <div className="skin-rating-container">
      <h3>Skin Rating</h3>
      <div className="skin-rating-options">
        {ratings.map((rating, index) => (
          <div
            key={index}
            className={`rating-circle ${selectedRating === rating.label ? "selected" : ""}`}
            style={{ backgroundColor: rating.color }}
            onClick={() => setSelectedRating(rating.label)}
          >
            <span className="rating-icon">{rating.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkinRating;
