// src/components/Contact.js

import React from "react";
import "./Contact.css"; // Import the corresponding CSS file

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you. Please fill out the form below, and we
          will get in touch with you shortly.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="user_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="user_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input type="tel" id="phone" name="user_phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea id="message" name="user_message" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
