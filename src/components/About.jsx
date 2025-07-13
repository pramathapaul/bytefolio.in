// src/components/About.jsx
import React from "react";
import AboutCard from "./AboutCard";       // Your profile/contact card
import AboutDetails from "./AboutDetails"; // The detailed content
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-wrapper-section py-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Profile Card */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <AboutCard />
          </div>

          {/* Details Section */}
          <div className="col-lg-8">
            <AboutDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
