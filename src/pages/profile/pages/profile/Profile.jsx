import React, { useState, useEffect } from "react";
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa"; 
import "./Profile.css";

const Profile = ({ onUpdateProfile }) => {
  const [formData, setFormData] = useState({
    firstName: localStorage.getItem("firstName") || "Soma",
    lastName: localStorage.getItem("lastName") || "Hassan",
    screenName: localStorage.getItem("screenName") || "",
  });

  const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || null);

  useEffect(() => {
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      setProfileImage(storedImage);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    localStorage.setItem("firstName", formData.firstName);
    localStorage.setItem("lastName", formData.lastName);
    localStorage.setItem("screenName", formData.screenName);
    onUpdateProfile({ profileImage, firstName: formData.firstName, lastName: formData.lastName });
  };

  return (
    <div className="personal-info-container">
      {/* Profile Image Section */}
      <div className="profile-image-section">
        <label htmlFor="profileUpload" className="profile-avatar">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="uploaded-image" />
          ) : (
            <span className="upload-text">+</span>
          )}
        </label>
        <input
          type="file"
          id="profileUpload"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>

      {/* Personal Information Section */}
      <div className="form-section">
        <h2 className="section-title">My Profile</h2>
        <h3 className="sub-title">Personal Information</h3>

        <div className="input-group">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </div>

        <input
          type="text"
          name="screenName"
          value={formData.screenName}
          onChange={handleChange}
          placeholder="Screen Name"
          className="full-width"
        />

        {/* Connected Accounts Section */}
        <h3 className="sub-title">Connected Accounts</h3>
        <ul className="connected-accounts">
          <li>
            <a href="https://accounts.google.com/" target="_blank" rel="noopener noreferrer">
              <FaGoogle className="account-icon google" /> Google
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="account-icon facebook" /> Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="account-icon instagram" /> Instagram
            </a>
          </li>
        </ul>

        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Profile;
