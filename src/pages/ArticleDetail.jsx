// src/components/ArticleDetail.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import articles from "../data/articles";
import "./ArticleDetail.css"; // Ensure this CSS file exists

const ArticleDetail = () => {
  const { resourceId } = useParams();
  const article = articles.find((item) => item.link === resourceId);

  if (!article) {
    return (
      <div className="article-not-found">
        <h2>Article Not Found</h2>
        <p>The article you are looking for does not exist.</p>
        <Link to="/resources" className="back-button">
          Back to Resources
        </Link>
      </div>
    );
  }

  return (
    <main className="article-detail-page">
      {/* Hero Section */}
      <section className="article-hero">
        <div className="overlay"></div>
        <div className="container hero-content">
          <h1>{article.title}</h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="article-content">
        <div className="container">
          <img
            src={article.image}
            alt={article.title}
            className="article-image"
            loading="lazy"
          />
          <div
            className="article-text"
            dangerouslySetInnerHTML={{ __html: article.content }}
          ></div>
          <Link to="/resources" className="back-button">
            Back to Resources
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ArticleDetail;
