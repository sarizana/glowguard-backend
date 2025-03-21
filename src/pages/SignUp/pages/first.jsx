import React from "react";
import { useNavigate } from "react-router-dom";
import "./first.css";
import first from "../../../assets/first.png";

const First = () => {
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  return (
    <div className="container">
      <img src={first} alt="Serum Bottle" className="serum-image" />
      <h2>
        Hello, <span className="username">Soma!</span>
      </h2>
      <p className="description">We'll ask you a few quick questions</p>
      <p className="description">so we can get to know you and your skin.</p>

      <button className="continue-button" onClick={() => navigate("/signup/second")}>
        Continue
      </button>
    </div>
  );
};

export default First;
