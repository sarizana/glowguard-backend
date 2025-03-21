import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ArticlePage.css";

const categories = [
  {
    name: "Product Type",
    options: ["Body Care", "Masks & Treatments", "Eye & Lip Care", "Toners", "Serums", "Face Cream", "Facial Cleansers"],
  },
  {
    name: "Skin Type",
    options: ["Oily", "Dry", "Combination", "Sensitive", "Normal"],
  },
  {
    name: "Ingredients",
    options: ["Retinol", "Hyaluronic Acid", "Niacinamide", "Vitamin C", "Salicylic Acid", "Ceramides", "Peptides", "AHA/BHA"],
  },
  {
    name: "Concerns",
    options: ["Acne", "Aging", "Hyperpigmentation", "Redness", "Dark Circles", "Wrinkles", "Sun Damage", "Dryness"],
  },
];

const articles = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  image: "path/to/image.jpg",
  title: `Article ${index + 1}`,
  description: "This is a short description of the article.",
  link: `/article/${index + 1}`,
}));

const fibonacciPagination = (totalPages) => {
  const sequence = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  let pages = sequence.filter((num) => num <= totalPages);
  if (!pages.includes(totalPages)) pages.push(totalPages);
  return pages;
};

const ArticlePage = () => {
  const [openFilters, setOpenFilters] = useState({});
  const [sortBy, setSortBy] = useState("popular");
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 20;
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const navigate = useNavigate();

  const toggleFilter = (category) => {
    setOpenFilters((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const handleFavoriteToggle = (article) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === article.id);
      return isFavorite ? prevFavorites.filter((fav) => fav.id !== article.id) : [...prevFavorites, article];
    });
  };

  const visibleArticles = articles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  return (
    <div className="article-page">
      {/* Sidebar */}
      <div className="sidebar">
        <h3 className="sidebar-title">Category</h3>
        {categories.map((category) => (
          <div key={category.name} className="filter-category">
            <button className="filter-toggle" onClick={() => toggleFilter(category.name)}>
              {category.name} <span className="arrow">↓</span>
            </button>
            {openFilters[category.name] && (
              <div className="filter-options">
                {category.options.map((option) => (
                  <label key={option} className="filter-option">
                    <input type="checkbox" /> {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="article-content">
        <div className="sort-by">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="popular">Most Popular</option>
            <option value="latest">Latest</option>
            <option value="recommended">Recommended</option>
          </select>
        </div>

        <div className="article-grid">
          {visibleArticles.map((article) => (
            <div key={article.id} className="article-card">
              <img src={article.image} alt={article.title} className="article-image" />

              {/* Heart Button */}
              <button
                className={`favorite-btn ${favorites.some((fav) => fav.id === article.id) ? "favorited" : ""}`}
                onClick={() => handleFavoriteToggle(article)}
              >
                &#9825;
              </button>

              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
              <a href={article.link} className="more-link">...More</a>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {fibonacciPagination(totalPages).map((page, index, array) => (
            <React.Fragment key={page}>
              {index > 0 && page - array[index - 1] > 1 && <span className="pagination-dots">...</span>}
              <button
                className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
