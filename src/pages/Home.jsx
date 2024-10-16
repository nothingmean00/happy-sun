import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Carousel library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Import the corresponding CSS file

const Home = () => {
  // Settings for the testimonials carousel
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <main>
      {/* Enhanced Hero Section */}
      <section className="home-hero">
        <div className="overlay"></div>
        <div className="container hero-content">
          <h1>Welcome to Upper East Home Care</h1>
          <p>Compassionate Home Health Aide Services Tailored for You</p>
          <Link to="/services" className="cta-button">
            Our Services
          </Link>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="home-about">
        <div className="container">
          <h2>About Upper East Home Care</h2>
          <div className="about-content">
            <img
              src="https://images.ctfassets.net/5ghoewqh73wu/4L3nLGb2fmdozthKnmjpxS/8eb3354faa69a081cec8d65a692ae1b1/Home_Health_Aide__HHA_.jpg?w=1000&h=667&q=50&fm=png"
              alt="Upper East Home Care Team"
              className="about-image"
              loading="lazy" // Lazy loading for performance
            />
            <div className="about-text">
              <p>
                At Upper East Home Care, we are dedicated to providing
                exceptional Home Health Aide Services that promote independence,
                dignity, and well-being for our clients. Our team of experienced
                caregivers is committed to delivering personalized care in the
                comfort of your own home.
              </p>
              <Link to="/about" className="learn-more-button">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="home-services">
        <div className="container">
          <h2>Our Home Health Aide Services</h2>
          <div className="services-grid">
            {/* Service Item */}
            <div className="service-item">
              <i className="fas fa-heartbeat service-icon"></i>
              <h3>Personal Care</h3>
              <p>
                Assistance with daily living activities such as bathing,
                dressing, and grooming.
              </p>
            </div>
            {/* Service Item */}
            <div className="service-item">
              <i className="fas fa-medkit service-icon"></i>
              <h3>Medical Support</h3>
              <p>
                Help with medication management and basic medical tasks under
                professional supervision.
              </p>
            </div>
            {/* Service Item */}
            <div className="service-item">
              <i className="fas fa-utensils service-icon"></i>
              <h3>Meal Preparation</h3>
              <p>
                Preparing nutritious meals tailored to your dietary needs and
                preferences.
              </p>
            </div>
            {/* Service Item */}
            <div className="service-item">
              <i className="fas fa-broom service-icon"></i>
              <h3>Housekeeping</h3>
              <p>
                Maintaining a clean and safe home environment to ensure your
                comfort and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="home-testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <Slider {...testimonialSettings}>
            {/* Testimonial 1 */}
            <div className="testimonial">
              <p>
                "Upper East Home Care has transformed our lives. Their
                caregivers are not only professional but also incredibly
                compassionate."
              </p>
              <h4>- Sarah M.</h4>
            </div>
            {/* Testimonial 2 */}
            <div className="testimonial">
              <p>
                "The personalized care my mother receives is outstanding. We
                couldn't ask for a better home care provider."
              </p>
              <h4>- John D.</h4>
            </div>
            {/* Testimonial 3 */}
            <div className="testimonial">
              <p>
                "Their flexible scheduling and dedicated staff make it easy to
                manage my health needs at home."
              </p>
              <h4>- Emily R.</h4>
            </div>
          </Slider>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="home-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>What services do you offer?</h3>
            <p>
              We offer a range of Home Health Aide Services including personal
              care, medical support, meal preparation, and housekeeping to
              ensure comprehensive care for our clients.
            </p>
          </div>
          <div className="faq-item">
            <h3>How do I schedule a service?</h3>
            <p>
              You can schedule a service by contacting us through our{" "}
              <Link to="/contact">Contact Page</Link> or by calling us directly
              at (555) 123-4567.
            </p>
          </div>
          <div className="faq-item">
            <h3>Are your caregivers certified?</h3>
            <p>
              Yes, all our caregivers are professionally trained and certified
              to provide high-quality home health assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="home-resources">
        <div className="container">
          <h2>Resources</h2>
          <div className="resources-grid">
            {/* Resource Item */}
            <div className="resource-item">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Resource 1"
                loading="lazy"
              />
              <h3>Elder Care Tips</h3>
              <p>
                A comprehensive guide on providing the best care for elderly
                loved ones.
              </p>
              <Link
                to="/resources/elder-care-tips"
                className="read-more-button"
              >
                Learn More
              </Link>
            </div>
            {/* Resource Item */}
            <div className="resource-item">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Resource 2"
                loading="lazy"
              />
              <h3>Nutrition and Wellness</h3>
              <p>
                Essential nutrition advice for maintaining a healthy lifestyle
                at any age.
              </p>
              <Link
                to="/resources/nutrition-wellness"
                className="read-more-button"
              >
                Learn More
              </Link>
            </div>
            {/* Resource Item */}
            <div className="resource-item">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Resource 3"
                loading="lazy"
              />
              <h3>Home Safety Checklist</h3>
              <p>
                Ensure your home is safe and accessible with our detailed
                checklist.
              </p>
              <Link
                to="/resources/home-safety-checklist"
                className="read-more-button"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="home-cta">
        <div className="container">
          <h2>Ready to Experience Exceptional Care?</h2>
          <p>
            Contact us today to schedule a consultation and learn how our Home
            Health Aide Services can benefit you or your loved ones.
          </p>
          <Link to="/contact" className="cta-button">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
