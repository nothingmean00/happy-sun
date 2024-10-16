// src/pages/About.jsx
import React from "react";
import Slider from "react-slick"; // Carousel library for testimonials
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"; // Accordion library for FAQs
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-accessible-accordion/dist/fancy-example.css"; // Accordion styles
import "./About.css"; // Import the corresponding CSS file

const About = () => {
  // Settings for the testimonials carousel
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
  };

  return (
    <main>
      {/* Enhanced Hero Section */}
      <section className="about-hero">
        <div className="overlay"></div>
        <video className="hero-video" autoPlay loop muted>
          <source
            src="https://www.w3schools.com/howto/rain.mp4" // Replace with your actual video URL
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-content">
          <h1>About Upper East Home Care</h1>
          <p>Compassionate Care Tailored to Your Needs</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="about-story">
        <div className="container">
          <h2>Our Story</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                Upper East Home Care was founded in 2010 with a mission to
                provide exceptional Home Health Aide (HHA) services to residents
                of the Upper East and West Sides. Our founder, Jane Doe,
                envisioned a company where compassionate care meets professional
                excellence, ensuring that individuals receive the support they
                need to maintain their independence and quality of life in the
                comfort of their own homes.
              </p>
              <p>
                Over the years, we have grown into a trusted provider of home
                care services, expanding our team with dedicated caregivers who
                share our commitment to excellence. Our values of integrity,
                compassion, and respect guide everything we do, from the way we
                interact with our clients to the training we provide our staff.
              </p>
            </div>
            <img
              src="https://via.placeholder.com/500x300" // Replace with your actual image URL
              alt="Upper East Home Care Team"
              className="story-image"
            />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="about-mission">
        <div className="container">
          <h2>Our Mission & Values</h2>
          <div className="mission-values">
            <div className="mission-item">
              <h3>Our Mission</h3>
              <p>
                To deliver personalized Home Health Aide services that empower
                individuals to live independently, maintain their dignity, and
                enhance their quality of life in a safe and comfortable home
                environment.
              </p>
            </div>
            <div className="values-item">
              <h3>Our Values</h3>
              <ul>
                <li>
                  <strong>Compassion:</strong> We treat every client with
                  empathy and kindness.
                </li>
                <li>
                  <strong>Integrity:</strong> We uphold the highest standards of
                  honesty and ethics.
                </li>
                <li>
                  <strong>Respect:</strong> We honor the individuality and
                  preferences of our clients.
                </li>
                <li>
                  <strong>Excellence:</strong> We strive for outstanding service
                  and continuous improvement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="about-team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            {/* Example Team Member */}
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150" // Replace with actual team member image
                alt="Jane Doe"
              />
              <h3>Jane Doe</h3>
              <p>
                Founder & CEO with over 15 years of experience in home care
                services.
              </p>
            </div>
            {/* Add more team members as needed */}
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150" // Replace with actual team member image
                alt="John Smith"
              />
              <h3>John Smith</h3>
              <p>Operations Manager ensuring seamless service delivery.</p>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150" // Replace with actual team member image
                alt="Emily Johnson"
              />
              <h3>Emily Johnson</h3>
              <p>
                Head of Caregiving, overseeing caregiver training and
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="about-certifications">
        <div className="container">
          <h2>Certifications & Accreditations</h2>
          <div className="certifications">
            {/* Example Certification */}
            <img
              src="https://via.placeholder.com/100" // Replace with actual certification logo
              alt="Certification 1"
            />
            <img
              src="https://via.placeholder.com/100" // Replace with actual certification logo
              alt="Certification 2"
            />
            <img
              src="https://via.placeholder.com/100" // Replace with actual certification logo
              alt="Certification 3"
            />
            {/* Add more certifications as needed */}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="about-community">
        <div className="container">
          <h2>Community Involvement</h2>
          <p>
            At Upper East Home Care, we believe in giving back to the community
            that supports us. We actively participate in local events, sponsor
            community health initiatives, and collaborate with organizations
            that share our commitment to enhancing the well-being of individuals
            in our area.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="about-testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <Slider {...testimonialSettings}>
            {/* Example Testimonial */}
            <div className="testimonial">
              <p>
                "Upper East Home Care has been a lifesaver for our family. Their
                caregivers are incredibly kind and professional."
              </p>
              <h4>- Emily R.</h4>
            </div>
            {/* Add more testimonials as needed */}
            <div className="testimonial">
              <p>
                "The team at Upper East Home Care goes above and beyond to
                ensure my mother's comfort and safety."
              </p>
              <h4>- Michael S.</h4>
            </div>
            <div className="testimonial">
              <p>
                "I appreciate the personalized approach and the genuine care
                provided by Upper East Home Care."
              </p>
              <h4>- Sarah L.</h4>
            </div>
          </Slider>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="about-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What services do you offer?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  We offer a range of Home Health Aide services including
                  personal care, medication management, meal preparation,
                  housekeeping, and companionship to support your daily living
                  activities.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How do I schedule a service?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  You can schedule our services by contacting us through our{" "}
                  <a href="/contact">Contact Page</a>, calling us directly, or
                  filling out our online form. We'll work with you to arrange a
                  schedule that fits your needs.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Are your caregivers trained and certified?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Yes, all our caregivers are thoroughly trained and hold the
                  necessary certifications to provide high-quality Home Health
                  Aide services. We also conduct regular training sessions to
                  ensure they stay updated with the latest caregiving practices.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Social Proof */}
      <section className="about-social-proof">
        <div className="container">
          <h2>As Seen In</h2>
          <div className="media-mentions">
            {/* Example Media Mention */}
            <img
              src="https://via.placeholder.com/150" // Replace with actual media logo
              alt="Media 1"
            />
            <img
              src="https://via.placeholder.com/150" // Replace with actual media logo
              alt="Media 2"
            />
            <img
              src="https://via.placeholder.com/150" // Replace with actual media logo
              alt="Media 3"
            />
            {/* Add more media mentions as needed */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Experience Exceptional Care?</h2>
          <p>
            Contact us today to schedule a consultation and learn how our Home
            Health Aide Services can benefit you or your loved ones.
          </p>
          <a href="/contact" className="cta-button">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
