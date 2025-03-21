import React from "react";
import Navbar from "./Navbar";
import SkinAnalysis from "../pages/Ai/SkinAnalysis";

const Ai = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-layout">
        <SkinAnalysis />  {/* Calls the AI Skin Analysis feature */}
      </div>
    </div>
  );
};

export default Ai;
