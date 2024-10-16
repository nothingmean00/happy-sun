// src/pages/NotFound.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Create and import a CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-button">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
