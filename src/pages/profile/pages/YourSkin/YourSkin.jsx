import React from "react";
import { useLocation } from "react-router-dom";
import "./YourSkin.css";

const YourSkin = () => {
  const location = useLocation();
  const userData = location.state || {};

  return (
    <div className="your-skin-container">
      <h2>Your Skin Profile</h2>
      <p>Here is a summary of your skin profile based on the quiz:</p>

      <div className="skin-info">
         <h3>Skin Profile</h3>
        <p><strong>Skin Type:</strong> {userData.skinType || "Not provided"}</p>
        <p><strong>Top Skin Concerns:</strong> {userData.skinConcerns?.join(", ") || "Not selected"}</p>
        <p><strong>Preferred Ingredients:</strong> {userData.ingredients?.join(", ") || "Not selected"}</p>
        <p><strong>Skin Reactions:</strong> {userData.skinReaction || "Not provided"}</p>

        <h3>Skincare Routine Steps</h3>
        <p>{userData.skincareSteps?.join(", ") || "Not selected"}</p>
      </div>
    </div>
  );
};

export default YourSkin;
