import React, { useState } from "react";
import "./AccountSecurity.css";
import { FaEdit } from "react-icons/fa";

const AccountSecurity = () => {
  const [email, setEmail] = useState("somahassan875@gmail.com");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password changed successfully!");
  };

  return (
    <div className="account-security-container">
      <h2 className="account-title">Account</h2>
      <p className="account-subtitle">
        Edit your account settings and change your password here.
      </p>

      {/* Email Section */}
      <div className="email-section">
        <strong>Email:</strong>
        <div className="email-display">
          <span>Your email address is <strong>{email}</strong></span>
          <button className="edit-email-button"><FaEdit /></button>
        </div>
      </div>

      {/* Password Change */}
      <input
        type="password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Re-type new password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className="change-password-button" onClick={handlePasswordChange}>
        Change password
      </button>

      {/* Multi-Factor Authentication */}
      <div className="mfa-section">
        <h3>Multi-factor Authentication</h3>
        <p>
          Increase your account security by requiring a code emailed to you when you log in.
          <a href="#" className="help-link"> Help Center article</a>
        </p>
        <button className="enable-mfa-button">Enable</button>
      </div>
    </div>
  );
};

export default AccountSecurity;
