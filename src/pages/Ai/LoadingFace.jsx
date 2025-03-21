import React, { useEffect } from "react";
import "./LoadingFace.css";

const LoadingFace = ({ onClose }) => {
  useEffect(() => {
    // ✅ Simulate loading and then switch to Capture modal
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="loading-modal">
        <div className="loading-spinner"></div>
        <p className="loading-text">Opening Camera...</p>
      </div>
    </div>
  );
};

export default LoadingFace;
