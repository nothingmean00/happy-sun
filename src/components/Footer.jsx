import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser"; // Ensure EmailJS is properly configured
import "./Footer.css"; // Import the corresponding CSS file

const Footer = () => {
  const [subscriptionStatus, setSubscriptionStatus] = useState("");

  const handleSubscription = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        e.target,
        "YOUR_USER_ID" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubscriptionStatus(
            "Subscription successful! Thank you for subscribing."
          );
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setSubscriptionStatus("An error occurred. Please try again later.");
        }
      );
  };

  return (
    <footer>
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section about-us">
          <h2>Upper East Home Care</h2>
          <p>
            Providing compassionate and professional home health care services
            on the Upper East and West Side.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/" className="footer-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="footer-link">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="footer-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="footer-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="footer-section services">
          <h3>Our Services</h3>
          <ul>
            <li>
              <NavLink to="/services#personal-care" className="footer-link">
                Personal Care
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services#medication-management"
                className="footer-link"
              >
                Medication Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/services#meal-preparation" className="footer-link">
                Meal Preparation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services#mobility-assistance"
                className="footer-link"
              >
                Mobility Assistance
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> 1234 Upper East Street,
            New York, NY 10021
          </p>
          <p>
            <i className="fas fa-phone-alt"></i> (555) 123-4567
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@uppereasthomecare.com
          </p>
          <p>
            <i className="fas fa-clock"></i> Mon - Fri: 8:00 AM - 6:00 PM
            <br /> Sat - Sun: 9:00 AM - 4:00 PM
          </p>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="footer-section newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form onSubmit={handleSubscription} className="newsletter-form">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              aria-label="Email Address"
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
          {subscriptionStatus && (
            <p className="subscription-status">{subscriptionStatus}</p>
          )}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        <a
          href="https://www.facebook.com/uppereasthomecare"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="social-icon"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.twitter.com/uppereasthomecare"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="social-icon"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/uppereasthomecare"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="social-icon"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/uppereasthomecare"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-icon"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      {/* Legal Links */}
      <div className="footer-legal">
        <NavLink to="/privacy-policy" className="legal-link">
          Privacy Policy
        </NavLink>
        <NavLink to="/terms-of-service" className="legal-link">
          Terms of Service
        </NavLink>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Upper East Home Care. All rights
          reserved.
        </p>
        <a
          href="#top"
          className="back-to-top"
          aria-label="Back to Top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
