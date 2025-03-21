import React, { useState } from "react";
import "./RoutineCard.css"; 
import RoutineSelection from "./RoutineSelection"; // ✅ Import the modal component

const RoutineCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ Control modal state

  return (
    <div className="routine-card">
      <h2 className="routine-card-title">A home for your routine</h2>
      <p className="routine-card-text">
        You can input your routine and track your skincare progress.
      </p>
      <button className="routine-card-button" onClick={() => setIsModalOpen(true)}>
        Get Started
      </button>

      {/* ✅ Show Modal When Button Clicked */}
      <RoutineSelection isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default RoutineCard;
