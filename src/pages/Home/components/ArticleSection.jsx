import React from "react";
import { useNavigate } from "react-router-dom";
import "./ArticleSection.css";
import img2 from "../../../assets/article2.jpg"; 
import img3 from "../../../assets/article3.jpg";
import img4 from "../../../assets/article4.jpg";
import img5 from "../../../assets/article5.jpg";

const articles = [
  { id: 1, image: img2, title: "Hydrating Facial Cleansers: A Must for Your Skincare Routine" },
  { id: 2, image: img3, title: "Understanding Hyperpigmentation: Causes & Treatments" },
  { id: 3, image: img4, title: "The Importance of Sunscreen: Why SPF is Essential" },
  { id: 4, image: img5, title: "Achieving Glowing Skin: Essential Tips & Tricks" },
];

const ArticleSection = () => {
  const navigate = useNavigate(); // ✅ Navigation Hook

  return (
    <section className="article-section">
      <div className="article-header">
        <h2 className="articlew">Our <span className="latest-text">Latest</span> Articles</h2>
      </div>

      <div className="article-cards">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <div className="image-container" onClick={() => navigate(`/article/${article.id}`)}>
              <img src={article.image} alt={article.title} className="card-image" />
              <div className="top-right-arrow">➤</div>
            </div>
            <p className="article-date">07.09.2022</p>
            <h3 className="card-title">{article.title}</h3>
            <p className="read-more" onClick={() => navigate(`/article/${article.id}`)}>Read More</p>
          </div>
        ))}
      </div>

      {/* ✅ Fixed "More Articles" Button - Navigates to Article Page */}
      <div className="more-article-button-container">
        <button className="more-article-button" onClick={() => navigate("/article")}>
          More Articles
        </button>
      </div>
    </section>
  );
};

export default ArticleSection;
