// src/components/Header.jsx

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; // Import the corresponding CSS file

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Toggle main navigation for mobile view
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close navigation when a link is clicked (useful for mobile)
  const closeNav = () => {
    setIsNavOpen(false);
  };

  // Toggle search bar
  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  // Handle scroll to add shadow to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <nav className="header-container">
        {/* Brand Name */}
        <div className="brand-name">
          <NavLink to="/" onClick={closeNav} className="brand-text">
            Upper East Home Care
          </NavLink>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className={`hamburger ${isNavOpen ? "open" : ""}`}
          onClick={toggleNav}
          aria-label="Toggle Navigation"
          aria-expanded={isNavOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to="/"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink
              to="/services"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "active-link" : "")}
              aria-haspopup="true"
              aria-expanded="false"
            >
              Services <i className="fas fa-caret-down"></i>
            </NavLink>
            <ul className="dropdown-menu">
              <li>
                <NavLink
                  to="/services#personal-care"
                  onClick={closeNav}
                  className="dropdown-link"
                >
                  Personal Care
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services#medication-management"
                  onClick={closeNav}
                  className="dropdown-link"
                >
                  Medication Management
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services#companion-care"
                  onClick={closeNav}
                  className="dropdown-link"
                >
                  Companion Care
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services#meal-preparation"
                  onClick={closeNav}
                  className="dropdown-link"
                >
                  Meal Preparation
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resources"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeNav}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Search Icon */}
        <div
          className={`search-icon ${isSearchActive ? "active" : ""}`}
          onClick={toggleSearch}
        >
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
            className="search-input"
          />
          <button className="search-button" aria-label="Submit Search">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
