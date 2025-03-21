import React from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = ({ isOpen, onClose, openLogin }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="signup-modal-overlay" onClick={onClose}>
      <div className="signup-modal" onClick={(e) => e.stopPropagation()}>
        <button className="signup-close-btn" onClick={onClose}>&times;</button>
        
        <h2 className="signup-logo-text"> Welcome to GlowGuard!</h2>
        <p className="signup-subtitle">Register your account </p>

        <form>
          <label>Full Name</label>
          <input type="text" className="signup-input" placeholder="Enter your name" required />

          <label>Email Address</label>
          <input type="email" className="signup-input" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" className="signup-input" placeholder="Enter your password" required />

          <button className="create-account-btn" type="submit" onClick={() => navigate("/signup/first")}>Sign Up</button>
        </form>

        <div className="signup-social-login">
          <button className="google-signup-btn">Sign up with Google</button>
         
        </div>

        <p className="signup-footer">
          Already have an account? <span className="link-text" onClick={() => { onClose(); openLogin(); }}>Log In</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;