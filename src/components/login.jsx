import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ isOpen, onClose, openSignup, openForgetPassword }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>

        <h2 className="login-title">Welcome back!</h2>
        <p className="login-subtitle">Please enter your details.</p>

        <form>
          <input type="email" className="login-input" placeholder="Email address" required />
          <input type="password" className="login-input" placeholder="Password" required />
          <button className="login-btn" type="submit">Sign In</button>
        </form>

        <div className="social-login">
          <button className="google-btn" > Sign in with Google</button>
        </div>

        <div className="login-links">
          <a href="#" className="forgot-password" onClick={openForgetPassword}>Forgot password?</a>
          <p className="signup-footer">
            Don't have an account? <span className="link-text" onClick={openSignup}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;