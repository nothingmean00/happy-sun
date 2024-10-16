// src/components/Resources.jsx

import React from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles"; // Ensure this path is correct
import "./Resources.css"; // Ensure this CSS file exists

const Resources = () => {
  return (
    <main className="resources-page">
      {/* Hero Section */}
      <section className="resources-hero">
        <div className="overlay"></div>
        <div className="container hero-content">
          <h1>Resources</h1>
          <p>Your guide to home care and well-being</p>
        </div>
      </section>

      {/* Articles List Section */}
      <section className="articles-list">
        <div className="container">
          <h2>Our Articles</h2>
          <div className="articles-grid">
            {articles.map((article) => (
              <div className="article-item" key={article.id}>
                <img src={article.image} alt={article.title} loading="lazy" />
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <Link
                  to={`/resources/${article.link}`}
                  className="read-more-button"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resources;
