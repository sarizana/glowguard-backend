import React, { useState, useEffect } from "react";
import "./Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((article) => article.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">Favorites</h2>

      {favorites.length === 0 ? (
        <p className="no-favorites">You haven't selected any favorites yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((article) => (
            <div key={article.id} className="favorites-card">
              <img src={article.image} alt={article.title} className="favorites-image" />
              <h3 className="favorites-name">{article.title}</h3>
              <p className="favorites-description">{article.description}</p>
              <a href={article.link} className="more-link">...More</a>
              <button className="remove-favorite" onClick={() => removeFavorite(article.id)}>❤️ Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
