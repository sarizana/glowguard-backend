import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AiSidebar.css"; // ✅ Sidebar styles

const AiSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Get current URL path

  return (
    <aside className="sidebar-containerr">
      <div className="sidebar">
        <div className="sidebar-header">GlowGuard</div>
        <ul className="menu">
          {/* ✅ AI Skin Report */}
          <li
            className={location.pathname === "/ai/report" ? "active" : ""}
            onClick={() => navigate("/ai/report")}
          >
            <i className="bi bi-bar-chart"></i>
          </li>

          {/* ✅ AI Chat */}
          <li
            className={location.pathname === "/AiChat" ? "active" : ""}
            onClick={() => navigate("/AiChat")}
          >
            <i className="bi bi-chat-left"></i>
          </li>

          {/* ✅ Routine Review - New Navigation */}
          <li
            className={location.pathname === "/RoutineReview" ? "active" : ""}
            onClick={() => navigate("/RoutineReview")}
          >
            <i className="bi bi-journal"></i>
          </li>

          
        </ul>

        {/* ✅ Profile & Logout Section */}
        <div className="user-actions">
          {/* ✅ Navigate to Profile */}
          <div className="profile-circle" onClick={() => navigate("/profile")}>
            S
          </div>

          {/* ✅ Navigate to Home (Logout) */}
          <div className="logout-icon" onClick={() => navigate("/Ai")}>
            <i className="bi bi-box-arrow-right"></i>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AiSidebar;
