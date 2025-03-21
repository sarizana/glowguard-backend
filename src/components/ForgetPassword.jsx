import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgetPassword.css"; 

const ForgetPassword = ({ isOpen, onClose, openLogin }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault(); // Prevent default form submission
    alert("Password reset link sent to " + email);
    navigate("/login"); // Redirect to the login page
  };

  if (!isOpen) return null;

  return (
    <div className="forget-password-modal">
      <div className="forget-password-container">
        <h2>Forgot Your Password?</h2>
        <p>Please enter the email address you'd like your password reset information sent to</p>
        
        <form onSubmit={handleReset}>
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          
          <button className="reset-btn" type="submit">Request Reset Link</button>
        </form>

        <p className="back-to-login" onClick={openLogin}>Back to Login</p>
      </div>
    </div>
  );
};

export default ForgetPassword;