// src/components/About.jsx
import React from "react";

const profile =
  "https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/429508075_1465998488124032_2887537433284005918_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mYjSsHnQ5h0Q7kNvwGbQ3Bw&_nc_oc=Adni6_rK9Fx2XeA7vingHxg2X_H_volGuJFtFrtxPOCJUZQdmxA4_3yyt9Z-kE6Jx5xsXhn1LyQ-rbUcNRmE68AO&_nc_zt=23&_nc_ht=scontent.fccu27-2.fna&_nc_gid=VcfASaNeydLpg8WXiPZGtA&oh=00_AfSFJM6KzbHbTSgU5B8LV-jYsSgkLIY54IUOKm_OdB4OaA&oe=6876B8BC"; 

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
