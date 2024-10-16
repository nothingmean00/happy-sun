import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Carousel library
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"; // Accordion components
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-accessible-accordion/dist/fancy-example.css"; // Accordion styles
import "./Services.css"; // Import the corresponding CSS file

const Services = () => {
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
      <section className="services-hero">
        <div className="overlay"></div>
        <video className="hero-video" autoPlay loop muted>
          <source
            src="https://www.w3schools.com/howto/rain.mp4" // Replace with your actual video URL
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="container hero-content">
          <h1>Our Home Health Aide Services</h1>
          <p>Compassionate Care Tailored to Your Needs</p>
          <Link to="/contact" className="cta-button">
            Get Started
          </Link>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="services-about">
        <div className="container">
          <h2>About Our Services</h2>
          <div className="about-content">
            <img
              src="https://images.ctfassets.net/5ghoewqh73wu/4L3nLGb2fmdozthKnmjpxS/8eb3354faa69a081cec8d65a692ae1b1/Home_Health_Aide__HHA_.jpg?w=1000&h=667&q=50&fm=png" // Updated with relevant image
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

      {/* Detailed Services */}
      <section className="detailed-services">
        <div className="container">
          <h2>Our Comprehensive Services</h2>
          <div className="services-grid">
            {/* Personal Care */}
            <div className="service-item">
              <img
                src="https://explorehealthcareers.org/wp-content/uploads/2016/11/home_care_assistant.jpg"
                alt="Personal Care - Home Health Aide assisting with daily activities"
                className="service-icon"
                loading="lazy"
              />
              <h3>Personal Care</h3>
              <p>
                Assistance with daily living activities such as bathing,
                dressing, and grooming to ensure your comfort and hygiene.
              </p>
            </div>
            {/* Medication Management */}
            <div className="service-item">
              <img
                src="https://homehealthaideguide.com/wp-content/uploads/hha-giving-medicine-patient.png"
                alt="Medication Management - Home Health Aide managing medications"
                className="service-icon"
                loading="lazy"
              />
              <h3>Medication Management</h3>
              <p>
                Ensuring timely and accurate medication administration to
                maintain your health and well-being.
              </p>
            </div>
            {/* Meal Preparation */}
            <div className="service-item">
              <img
                src="https://www.rightathome.net/-/media/images/brand-images/meal-prep-and-shopping/caregiver-serving-senior-meal-rah-0620-2-min.jpg"
                alt="Meal Preparation - Caregiver preparing meals for seniors"
                className="service-icon"
                loading="lazy"
              />
              <h3>Meal Preparation</h3>
              <p>
                Preparing nutritious meals tailored to your dietary needs and
                preferences to support your health.
              </p>
            </div>
            {/* Mobility Assistance */}
            <div className="service-item">
              <img
                src="https://www.bizinsure.com/wp-content/uploads/2022/04/reasons-become-home-health-aide-600x600.jpg"
                alt="Mobility Assistance - Home Health Aide assisting with mobility"
                className="service-icon"
                loading="lazy"
              />
              <h3>Mobility Assistance</h3>
              <p>
                Helping you move safely around your home, reducing the risk of
                falls and promoting independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="services-benefits">
        <div className="container">
          <h2>Benefits of Choosing Our Services</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Personalized Care</h3>
              <p>
                Customized assistance to fit your specific needs and
                preferences.
              </p>
            </div>
            <div className="benefit-item">
              <h3>Experienced Caregivers</h3>
              <p>
                Our team consists of trained and compassionate professionals.
              </p>
            </div>
            <div className="benefit-item">
              <h3>Flexible Scheduling</h3>
              <p>Services available 24/7 to accommodate your lifestyle.</p>
            </div>
            <div className="benefit-item">
              <h3>Safety and Comfort</h3>
              <p>
                Ensuring a secure and homely environment for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="services-testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <Slider {...testimonialSettings}>
            {/* Testimonial 1 */}
            <div className="testimonial">
              <p>
                "Upper East Home Care has been a blessing for my family. Their
                caregivers are compassionate and professional."
              </p>
              <h4>- John Smith</h4>
            </div>
            {/* Testimonial 2 */}
            <div className="testimonial">
              <p>
                "The personalized care my mother received was outstanding. Thank
                you, Upper East Home Care!"
              </p>
              <h4>- Emily R.</h4>
            </div>
            {/* Add more testimonials as needed */}
          </Slider>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="services-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <Accordion allowZeroExpanded>
            {/* FAQ 1 */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What services do Home Health Aides provide?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Home Health Aides assist with daily living activities such as
                  bathing, dressing, grooming, meal preparation, medication
                  management, and mobility assistance.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* FAQ 2 */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How do I schedule a service?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  You can schedule a service by contacting us through our{" "}
                  <Link to="/contact">Contact Page</Link>, where you can fill
                  out a form or call us directly.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* FAQ 3 */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Are your caregivers certified?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Yes, all our caregivers are professionally trained and
                  certified to provide high-quality home health assistance.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* FAQ 4 */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What are your service hours?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  We offer flexible scheduling with services available 24/7 to
                  accommodate your needs. Whether you require daytime support or
                  nighttime assistance, our team is here to help.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* FAQ 5 */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How do you ensure the quality of care?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  We conduct thorough background checks, provide comprehensive
                  training, and regularly monitor our caregivers to ensure they
                  meet our high standards of care. Additionally, we seek
                  feedback from our clients to continually improve our services.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            {/* Add more FAQs as needed */}
          </Accordion>
        </div>
      </section>

      {/* Social Proof Removed */}

      {/* Call to Action */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Receive Exceptional Care?</h2>
          <p>
            Contact us today to schedule a consultation and learn more about how
            our Home Health Aide Services can benefit you or your loved ones.
          </p>
          <Link to="/contact" className="cta-button">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
