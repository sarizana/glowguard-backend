import React from "react";
import { useNavigate } from "react-router-dom";
import "./IntroductionSection.css";
import intro1 from "../../../assets/intro.jpg"; 
import intro2 from "../../../assets/intro2.png"; 

const IntroductionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="introduction-section">
      {/* Left Image */}
      <img src={intro1} alt="Intro Left" className="intro-image-left" />

      {/* Center Content */}
      <div className="intro-text-container">
        <h2 className="intro-title">
          About  <span className="highlight">GlowGuard</span> 
        </h2>
        <p className="intro-text">
        We provide a curated selection of high-performance beauty products that are designed to nourish, protect, 
        and enhance your natural glow.Our goal is to redefine skincare with formulas that prioritize skin health,
         sustainability, and effectiveness. At GlowGuard, we believe that beauty is a journey, not a destination, 
        and we are here to guide you every step of the way. Whether you are looking for hydration, anti-aging solutions,
         or expert skincare advice, our products and resources are tailored to meet your unique needs. 
        Explore our collection and join a community that values premium beauty, backed by science and nature
        </p>
        <button className="intro-button" onClick={() => navigate("/about")}>
          Read More
        </button>
      </div>

      {/* Right Image */}
      <img src={intro2} alt="Intro Right" className="intro-image-right" />
    </section>
  );
};

export default IntroductionSection;
