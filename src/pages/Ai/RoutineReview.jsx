import React from "react";
import "./RoutineReview.css"; // ✅ Routine Review styles
import AiSidebar from "../Ai/AiSidebar"; // ✅ Import AiSidebar

const RoutineReview = () => {
  return (
    <div className="routine-review-page">
        <AiSidebar />
    <div className="routine-review-container">
        
      <h2>Checkout Your Routines</h2>
      <p className="no-routines">No routines found</p>
    </div>
    </div>
  );
};

export default RoutineReview;
