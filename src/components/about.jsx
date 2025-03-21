import React from "react";
import Navbar from "./Navbar";
import FirstSection from "../pages/About/components/FirstSection";
import Footer from "./Footer";


const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <FirstSection />
      <Footer />
    </div>
  );
};

export default About;
