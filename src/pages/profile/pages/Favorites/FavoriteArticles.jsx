import React from "react";
import "./FavoriteArticles.css"; 
import { useNavigate } from "react-router-dom";

const FavoriteArticles = () => {
  const navigate = useNavigate();

  return (
    <div className="favorite-articles-container">
      <p className="message">Explore and save articles that interest you to your favorites!</p>
      <button onClick={() => navigate("/article")} className="continue-button">
        BROWSE ARTICLES
      </button>
    </div>
  );
};

export default FavoriteArticles;
