// src/components/Home.jsx
import React from "react";
import { ReactTyped } from "react-typed";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center gap-5 text-center text-md-start">
        
        {/* ✏️ Text */}
        <div className="order-1 order-md-0">
          {/* Signature Text */}
          <p className="signature-text">Pramatha Paul</p>
          <h1 className="display-4">
            Welcome to <span className="text-accent">bytefolio.in</span>
          </h1>
          <h3 className="display-4">
            Hi, I'm <span className="text-accent">Pramatha Paul</span>
          </h3>

          <p className="animation-text">
            I'm a{" "}
            <ReactTyped
              className="typed-text"
              strings={[
                "Full Stack Developer",
                "React Enthusiast",
                "Java Programmer",
                "WordPress Developer",
              ]}
              typeSpeed={60}
              backSpeed={30}
              loop
            />
          </p>

          <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-4 flex-wrap">
            <a href="#projects">
              <button className="btn-accent">View My Work</button>
            </a>
            <a href="#contact">
              <button className="btn-outline-accent">Get In Touch</button>
            </a>
          </div>

          <div className="social-icons d-flex justify-content-center gap-5 mt-4">
            <a href="https://github.com/pramathapaul" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/pramatha-paul-831867270/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="home-image order-0 order-md-1">
          <img
            src="https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/429508075_1465998488124032_2887537433284005918_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mYjSsHnQ5h0Q7kNvwGbQ3Bw&_nc_oc=Adni6_rK9Fx2XeA7vingHxg2X_H_volGuJFtFrtxPOCJUZQdmxA4_3yyt9Z-kE6Jx5xsXhn1LyQ-rbUcNRmE68AO&_nc_zt=23&_nc_ht=scontent.fccu27-2.fna&_nc_gid=VcfASaNeydLpg8WXiPZGtA&oh=00_AfSFJM6KzbHbTSgU5B8LV-jYsSgkLIY54IUOKm_OdB4OaA&oe=6876B8BC"
            alt="Pramatha Paul"
            className="img-fluid rounded-circle shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
