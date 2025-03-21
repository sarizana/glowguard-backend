import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Ensure navigation works
import "./AISkinReport.css";
import AiSidebar from "./AiSidebar"; // ✅ Import AiSidebar
import Capture from "./Capture"; // ✅ Import Capture
import LoadingFace from "./LoadingFace"; // ✅ Import LoadingFace
import Navbar from "../../components/Navbar"; // ✅ Ensure Navbar exists
import Footer from "../../components/Footer"; // ✅ Ensure Footer exists
import {
  MdHealthAndSafety,
  MdFaceRetouchingNatural,
  MdRemoveRedEye,
  MdOpacity,
  MdOutlineFace,
  MdGridOn,
  MdBrightness6,
  MdTexture,
} from "react-icons/md";
import { FaOilCan } from "react-icons/fa";

const AISkinReport = () => {
  const [showCapture, setShowCapture] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [skinScore, setSkinScore] = useState(null);

  const navigate = useNavigate();

  return (
    <>
      {/* ✅ Navbar at the top */}
      <Navbar />

      <div className="ai-skin-report">
        {/* ✅ Sidebar */}
        <AiSidebar />

        {/* ✅ Main Content */}
        <div className="main-content">
          <h1 className="report-title">GlowGuard's Skin Analysis</h1>

          <div className="skin-container">
            {/* ✅ Left Section (Report Box) */}
            <div className="report-section">
              <div className="report-header">
                <h2>Skin Analysis Reports</h2>
                <p>** Click on the graph bars to open the full report **</p>
              </div>

              {/* ✅ Conditional Rendering - Show Report or Empty Message */}
              {skinScore ? (
                <div className="skin-report">
                  <div className="score-section">
                    <span className="health-status">Healthy ✅</span>
                    <span className="skin-score">{skinScore}</span>
                    <span className="history-btn">History</span>
                  </div>
                  {/* ✅ AI Report Sections - Scrollable */}
                  <div className="report-details">
                    <div className="report-item">Overall Health</div>
                    <div className="report-item">Acne</div>
                    <div className="report-item">Dark Circles</div>
                    <div className="report-item">Hydration</div>
                    <div className="report-item">Oiliness</div>
                    <div className="report-item">Pores</div>
                    <div className="report-item">Redness</div>
                    <div className="report-item">Skin Tone</div>
                    <div className="report-item">Texture</div>
                  </div>
                </div>
              ) : (
                <div className="empty-report">
                  <p>Start your Skin Analysis journey with <strong>GlowGuard</strong></p>
                </div>
              )}

              {/* ✅ Start Selfie Diagnostic */}
              <button className="selfie-btn" onClick={() => setShowLoading(true)}>
                Start Selfie Diagnostic →
              </button>
            </div>

            {/* ✅ Right Section (Skin Condition & Concerns) */}
            <div className="right-section">
              {/* ✅ Header (Health Status & History Button) */}
              <div className="right-header">
                <span className="health-status">Healthy ✅</span>
                <button className="history-btn">History</button>
              </div>

              {/* ✅ Skin Score & Condition Text */}
              <div className="skin-score-container">
                <h1 className="skin-score">92</h1>
                <p className="skin-condition-text">Your skin is in great condition! Keep up with your skincare routine.</p>
              </div>

              {/* ✅ Scan Face Button (Opens Instructions Modal) */}
              <button className="scan-face-btn" onClick={() => setShowInstructions(true)}>
                Scan Your Face
              </button>

              {/* ✅ Scrollable Skin Concerns (Using Icons) */}
              <div className="skin-concerns">
                {[ 
                  { icon: <MdHealthAndSafety className="concern-icon" />, text: "Overall Health" },
                  { icon: <MdFaceRetouchingNatural className="concern-icon" />, text: "Acne" },
                  { icon: <MdRemoveRedEye className="concern-icon" />, text: "Dark Circles" },
                  { icon: <MdOpacity className="concern-icon" />, text: "Hydration" },
                  { icon: <FaOilCan className="concern-icon" />, text: "Oiliness" },
                  { icon: <MdGridOn className="concern-icon" />, text: "Pores" },
                  { icon: <MdBrightness6 className="concern-icon" />, text: "Redness" },
                  { icon: <MdOutlineFace className="concern-icon" />, text: "Skin Tone" },
                  { icon: <MdTexture className="concern-icon" />, text: "Texture" },
                ].map((concern, index) => (
                  <div key={index} className="concern-item">
                    {concern.icon}
                    <span>{concern.text}</span>
                  </div>
                ))}
              </div>

              {/* ✅ Instructions Modal */}
              {showInstructions && (
                <div className="modal-overlay">
                  <div className="modal-content">
                    <button className="close-btn" onClick={() => setShowInstructions(false)}>&times;</button>
                    <h2 className="modal-title">Instructions</h2>
                    <ul className="instructions-list">
                      <li><img src="path-to-icon" alt="Remove Glasses" /> Remove glasses and ensure your forehead is clear</li>
                      <li><img src="path-to-icon" alt="Good Lighting" /> Ensure good lighting in your environment</li>
                      <li><img src="path-to-icon" alt="No Makeup" /> Test without makeup for better accuracy</li>
                      <li><img src="path-to-icon" alt="Align Face" /> Look straight at the camera and align your face in the circle</li>
                    </ul>

                    <button className="scan-btn" onClick={() => navigate('/pages/ai/loadingface.jsx')}>
                      Scan Your Face
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ✅ Loading Face Scanner */}
        {showLoading && <LoadingFace onClose={() => { setShowLoading(false); setShowCapture(true); }} />}

        {/* ✅ Camera Capture Modal */}
        {showCapture && <Capture onClose={() => setShowCapture(false)} />}
      </div>

      {/* ✅ Footer at the bottom */}
      <Footer />
    </>
  );
};

export default AISkinReport;
