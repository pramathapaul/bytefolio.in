// src/components/About.jsx
import React from "react";

const profile =
  "/profile_pic.jpg"; 

const AboutCard = () => {
  return (
    <section
      id="about"
      className="about-section d-flex justify-content-center align-items-center"
    >
      <div className="about-card text-center">
        <div className="profile-img-wrapper">
          <img src={profile} alt="Pramatha Paul" className="profile-img" />
        </div>

        <h2 className="name">Pramatha Paul</h2>
        <p className="role">Full Stack Developer</p>

        <div className="contact-info mt-4">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:pramathapaul8090@gmail.com" className="contact-link">
              pramathapaul8090@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <a href="tel:+97003823938" className="contact-link">
              +91 70038 23938
            </a>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            Kolkata, India
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
