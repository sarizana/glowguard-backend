import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import ReactCompareImage from "react-compare-image";
import "./SkinAnalysis.css";

import beforeImage from "../../assets/before.avif";
import afterImage from "../../assets/after.avif";

import sample1 from "../../assets/sample1.jpg";
import sample2 from "../../assets/sample2.jpg";
import sample3 from "../../assets/sample3.jpg";
import sample4 from "../../assets/sample4.jpg";
import sample5 from "../../assets/sample5.jpg";
import sample6 from "../../assets/sample6.jpg";
import sample7 from "../../assets/sample7.jpg";
import sample8 from "../../assets/sample8.jpg";

const SkinAnalysis = () => {
  const [images] = useState([sample1, sample2, sample3, sample4, sample5, sample6, sample7, sample8]);
  const navigate = useNavigate(); // ✅ Initialize navigation

  return (
    <div className="skin-analysis">
      <div className="analysis-container">
        {/* Image Comparison */}
        <div className="image-comparison">
          <ReactCompareImage leftImage={beforeImage} rightImage={afterImage} />
        </div>

        {/* Text Content */}
        <div className="analysis-text">
          <h2>Discover Your AI-Powered Skin Transformation</h2>
          <ul>
            <li>🤖 <strong>AI-Driven Insights:</strong> Get precise skin analysis powered by artificial intelligence.</li>
            <li>🔬 <strong>Personalized Solutions:</strong> Receive expert skincare recommendations tailored to your skin.</li>
            <li>📊 <strong>Track Your Progress:</strong> Compare your skin's condition over time with AI-based monitoring.</li>
            <li>✨ <strong>Improve Your Glow:</strong> Unlock your best skin with science-backed AI predictions.</li>
          </ul>
          {/* ✅ Fixed navigation */}
          <button className="checkout-btn" onClick={() => navigate("/ai/report")}>
            Get Your AI Skin Report →
          </button>
        </div>
      </div>

      {/* Sample User Images */}
      <div className="image-scroll">
        {images.map((img, index) => (
          <img key={index} src={img} alt="Sample" className="scroll-image" />
        ))}
      </div>
    </div>
  );
};

export default SkinAnalysis;
