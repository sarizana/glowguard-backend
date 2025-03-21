import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";  
import Sidebar from "../pages/profile/components/Sidebar";  
import Feedback from "../pages/profile/components/Feedback";  
import Footer from "./Footer";  
import "./Profile.css"; // Make sure CSS is applied

const Profile = () => {
  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-content">
        <Sidebar />
        <div className="profile-main">
          <Outlet /> {/* Renders the active profile route */}
        </div>
      </div>
      <Feedback />
      <Footer />
    </div>
  );
};

export default Profile;
