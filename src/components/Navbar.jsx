import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./login";
import Signup from "./signup";
import ForgetPassword from "./ForgetPassword"; // ✅ Added Forget Password Modal

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false); // ✅ Added Forget Password state
  const navigate = useNavigate();

  // ✅ Close dropdown & modals when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        !e.target.closest(".services-menu") &&
        !e.target.closest(".profile-menu")
      ) {
        setShowServices(false);
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
    setShowForgetPassword(false); // ✅ Close ForgetPassword modal when Login opens
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
    setShowForgetPassword(false); // ✅ Close ForgetPassword modal when Signup opens
  };

  const handleForgetPasswordClick = () => {
    setShowForgetPassword(true);
    setShowLogin(false); // ✅ Close Login modal when ForgetPassword opens
    setShowSignup(false); // ✅ Close Signup modal when ForgetPassword opens
  };
  //searh
  const [searchOpen, setSearchOpen] = useState(false);
const [searchQuery, setSearchQuery] = useState("");

const searchSuggestions = [
  "Aloe Vera", "Acne Treatment", "AHA Exfoliant", "Anti-Aging Cream",
  "Brightening Serum", "Ceramide Moisturizer", "Hyaluronic Acid",
  "Niacinamide Booster", "Retinol Night Cream", "Vitamin C Serum"
];

const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);
};

const filteredSuggestions = searchSuggestions.filter((item) =>
  item.toLowerCase().startsWith(searchQuery.toLowerCase())
);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">GlowGuard</div>
        <ul className={`nav-links ${isMobile ? "mobile" : ""}`}>
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                navigate("/home");
                setIsMobile(false);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#article"
              onClick={(e) => {
                e.preventDefault();
                navigate("/article");
                setIsMobile(false);
              }}
            >
              Article
            </a>
          </li>

          {/* ✅ Services Dropdown */}
          <li className="services-menu">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                setShowServices(!showServices);
              }}
            >
              Services <i className="bi bi-chevron-down"></i>
            </a>
            {showServices && (
              <div className="dropdown-menu">
                <div
                  className="dropdown-item"
                  onClick={() => {
                    navigate("/experts");
                    setShowServices(false);
                  }}
                >
                  <i className="bi bi-person-bounding-box"></i> Ask Experts
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => {
                    navigate("/ai");
                    setShowServices(false);
                  }}
                >
                  <i className="bi bi-cpu"></i> AI Analysis
                </div>
                <div
                  className="dropdown-item"
                  onClick={() => {
                    navigate("/routine");
                    setShowServices(false);
                  }}
                >
                  <i className="bi bi-journal-check"></i> Build Routine
                </div>
              </div>
            )}
          </li>

          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                navigate("/about");
                setIsMobile(false);
              }}
            >
              About
            </a>
          </li>
        </ul>

        <div className="nav-icons">
         {/* ✅ Search */}
         {/* ✅ Search Component Inside Navbar */}
<div className="search-container">
  {/* 🔹 Show Search Icon When Search is Closed */}
  {!searchOpen && (
    <i className="bi bi-search search-icon" onClick={() => setSearchOpen(true)}></i>
  )}

  {/* 🔹 Search Input Box */}
  <div className={`search-box ${searchOpen ? "open" : ""}`}>
    <i className="bi bi-search search-input-icon"></i>
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearchChange}
      autoFocus
    />
    <i className="bi bi-x close-search" onClick={() => { setSearchQuery(""); setSearchOpen(false); }}></i>

    {/* ✅ Fixed Dropdown Visibility */}
    {searchOpen && searchQuery.length > 0 && (
      <div className="search-dropdown">
        {filteredSuggestions.length > 0 ? (
          filteredSuggestions.map((suggestion, index) => (
            <div key={index} className="search-item" onClick={() => setSearchQuery(suggestion)}>
              {suggestion}
            </div>
          ))
        ) : (
          <div className="search-item no-result">No results found</div>
        )}
      </div>
    )}
  </div>
</div>



          {/* ✅ favorite */}


          <i className="bi bi-heart" onClick={() => navigate("/favorites")}></i>

          {/* ✅ Profile Icon with Dropdown */}
          <div className="profile-menu">
            <i
              className="bi bi-person"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            ></i>
            {showProfileMenu && (
              <div className="profile-dropdown">
                <div
                  className="profile-item"
                  onClick={handleLoginClick}
                >
                  Login
                </div>
                <div
                  className="profile-item"
                  onClick={handleSignupClick}
                >
                  Register
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ✅ Login, Signup & Forget Password Modals */}
        <Login
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
          openSignup={handleSignupClick}
          openForgetPassword={handleForgetPasswordClick}
        />
        <Signup
          isOpen={showSignup}
          onClose={() => setShowSignup(false)}
          openLogin={handleLoginClick}
        />
        <ForgetPassword
          isOpen={showForgetPassword}
          onClose={() => setShowForgetPassword(false)}
          openLogin={handleLoginClick}
        />

        {/* ✅ Mobile Menu Toggle */}
        <div
          className="hamburger-menu"
          onClick={() => setIsMobile(!isMobile)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
