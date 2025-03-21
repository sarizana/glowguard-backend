import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./loadingScreen.css";
import productImage from "../../../assets/skincare-product.png"; // Corrected import path

const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/signup/final"); // Navigate to final screen after 3 seconds
    }, 3000);
  }, [navigate]);

  return (
    <div className="loading-container">
      <h2>Saving your skin profile...</h2>
      <img src={productImage} alt="Loading Skin Product" className="loading-image" />
      <p>Please wait while we set up your recommendations.</p>
    </div>
  );
};

export default LoadingScreen;
