import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser, FaShieldAlt, FaSignOutAlt, FaEnvelope, FaInfoCircle,
  FaQuestionCircle, FaStar, FaClipboardList
} from "react-icons/fa";
import "./AccountHome.css";

const AccountHome = () => {
  const navigate = useNavigate();

  const accountLinks = [
    { name: "Profile", path: "/profile/profile", icon: <FaUser /> }, // 🔥 Fixed path
    { name: "Your Skin", path: "/profile/your-skin", icon: <FaClipboardList /> },
    { name: "Favorites", path: "/profile/favorites", icon: <FaStar /> },
    { name: "Email Preferences", path: "/profile/email-preferences", icon: <FaEnvelope /> },
    { name: "Account Security", path: "/profile/account-security", icon: <FaShieldAlt /> },
  ];

  const supportLinks = [
    { name: "Support", path: "/profile/support", icon: <FaQuestionCircle /> },
    { name: "Contact Us", path: "/profile/contact-us", icon: <FaEnvelope /> },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/profile/privacy-policy", icon: <FaInfoCircle /> },
    { name: "Terms of Service", path: "/profile/terms-of-service", icon: <FaInfoCircle /> },
  ];

  return (
    <div className="account-home-container">
      <h2 className="account-title">Account Home</h2>

      <div className="account-grid">
        {/* Account Section */}
        {accountLinks.map((item) => (
          <div key={item.name} className="account-card" onClick={() => navigate(item.path)}>
            <i className="account-icon">{item.icon}</i>
            <h3>{item.name}</h3>
            <p>Manage and update your {item.name.toLowerCase()} settings.</p>
          </div>
        ))}

        {/* Support Section */}
        {supportLinks.map((item) => (
          <div key={item.name} className="account-card" onClick={() => navigate(item.path)}>
            <i className="account-icon">{item.icon}</i>
            <h3>{item.name}</h3>
            <p>Get help with your account and website issues.</p>
          </div>
        ))}

        {/* Legal Section */}
        {legalLinks.map((item) => (
          <div key={item.name} className="account-card" onClick={() => navigate(item.path)}>
            <i className="account-icon">{item.icon}</i>
            <h3>{item.name}</h3>
            <p>Read our {item.name.toLowerCase()} details.</p>
          </div>
        ))}

        {/* Sign Out */}
        <div className="account-card sign-out-card" onClick={() => navigate("/logout")}>
          <i className="account-icon"><FaSignOutAlt /></i>
          <h3>Sign Out</h3>
          <p>Log out of your account securely.</p>
        </div>
      </div>
    </div>
  );
};

export default AccountHome;
