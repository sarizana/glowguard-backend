import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { 
  FaUser, FaShieldAlt, FaSignOutAlt, FaEnvelope, FaInfoCircle, 
  FaQuestionCircle, FaStar, FaClipboardList 
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || null);
  const [userName, setUserName] = useState(
    `${localStorage.getItem("firstName") || "Sariza"} ${localStorage.getItem("lastName") || "Zana"}`
  );

  useEffect(() => {
    const updateSidebarData = () => {
      setProfileImage(localStorage.getItem("profileImage") || null);
      setUserName(
        `${localStorage.getItem("firstName") || "Soma"} ${localStorage.getItem("lastName") || "Hassan"}`
      );
    };
    window.addEventListener("storage", updateSidebarData);
    return () => window.removeEventListener("storage", updateSidebarData);
  }, []);

  return (
    <div className="sidebar-container">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-avatar">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="sidebar-profile-img" />
          ) : (
            <FaUser className="default-icon" />
          )}
        </div>
        <h2 className="profile-name">{userName}</h2>
      </div>

      <nav className="sidebar-nav">
        {/* Account Section */}
        <h3 className="sidebar-category">Account</h3>
        <ul>
          <li>
            <NavLink to="profile">
              <FaUser className="sidebar-icon" /> Profile
            </NavLink>

          </li>
          <li>
            <NavLink to="your-skin">
              <FaClipboardList className="sidebar-icon" /> Your Skin
            </NavLink>
          </li>
          <li>
            <NavLink to="favorites">
              <FaStar className="sidebar-icon" /> Favorites
            </NavLink>
          </li>
          <li>
            <NavLink to="email-preferences">
              <FaEnvelope className="sidebar-icon" /> Email Preferences
            </NavLink>
          </li>
          <li>
            <NavLink to="account-security">
              <FaShieldAlt className="sidebar-icon" /> Account Security
            </NavLink>
          </li>
        </ul>

        {/* Support Section */}
        <h3 className="sidebar-category">Support</h3>
        <ul>
          <li>
            <NavLink to="support">
              <FaQuestionCircle className="sidebar-icon" /> Support
            </NavLink>
          </li>
          <li>
            <NavLink to="contact-us">
              <FaEnvelope className="sidebar-icon" /> Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Legal Section */}
        <h3 className="sidebar-category">Legal</h3>
        <ul>
          <li>
            <NavLink to="privacy-policy">
              <FaInfoCircle className="sidebar-icon" /> Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink to="terms-of-service">
              <FaInfoCircle className="sidebar-icon" /> Terms of Service
            </NavLink>
          </li>
        </ul>

        {/* Sign Out */}
        <ul>
          <li>
            <NavLink to="/logout" className="sign-out">
              <FaSignOutAlt className="sidebar-icon" /> Sign Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
