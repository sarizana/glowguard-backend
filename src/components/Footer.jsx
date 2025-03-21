import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  console.log("✅ Footer component is rendering!");
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/home#contact";    }
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - GlowGuard Brand Info */}
        <div className="footer-left">
          <h2 className="footer-logo">GlowGuard</h2>
          <p className="footer-description">
            Get expert skincare guidance with AI-powered analysis or real dermatologists.  
            Build your perfect skincare routine today!
          </p>

          {/* Social Media Icons */}
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://youtube.com" target="_blank" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://whatsapp.com" target="_blank" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Middle Section - Skincare Help */}
        <div className="footer-middle">
          <h3>Skincare Help</h3>
          <ul>
            <li><a href="/ai">AI Skin Analysis</a></li>
            <li><a href="/experts">Ask a Skincare Expert</a></li>
            <li><a href="/routine">Build Your Routine</a></li>
          </ul>
        </div>

        {/* Right Section - Learn More */}
        <div className="footer-middle">
          <h3>Learn More</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/pricing">Pricing</a></li>
          </ul>
        </div>

        {/* Right Section - Support */}
        <div className="footer-right">
          <h3>Support</h3>
          <ul>
  <li>  <Link to="/home#contact">Contact Us</Link></li>  {/* ✅ FIXED: Uses <Link> instead of <a> */}
  <li><Link to="/faq">FAQs</Link></li>
</ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>Made with 💜 from Kurdistan</p>
        <p>&copy; {new Date().getFullYear()} GlowGuard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;