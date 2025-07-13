// src/components/AboutDetails.jsx
import React from "react";

const AboutDetails = () => {
    return (
        <section className="about-details-section container text-white">
            <div className="text-start">
                <button className="btn-intro mb-3">Get to Know Me</button>
                <h2 className="display-5 fw-bold mb-3">
                    Passionate About Creating Digital Experiences
                </h2>
                <p className="mb-5">
                    I'm Pramatha Paul, a web designer and 3rd-year B.Tech CSE student at JIS University. With a diploma in CST and a strong passion for web technology, I create clean, responsive websites using tools like HTML, CSS, WordPress, and Python. I'm a fast learner, always exploring new ways to build better, user-friendly web experiences.
                </p>
            </div>

            <div className="stats-box d-flex flex-wrap justify-content-between align-items-center mb-4">
                <div className="stat-item">
                    <h3 className="stat-number">50+</h3>
                    <p className="stat-label">Projects Completed</p>
                </div>
                <div className="stat-item">
                    <h3 className="stat-number">3+</h3>
                    <p className="stat-label">Years Experience</p>
                </div>
                {/* <div className="stat-item">
          <h3 className="stat-number">98%</h3>
          <p className="stat-label">Client Satisfaction</p>
        </div> */}
            </div>

            <div className="row info-list mb-5">
                <div className="col-md-6 mb-3">
                    <strong>Specialization:</strong><br />
                    Full Stack Web Development
                </div>
                <div className="col-md-6 mb-3">
                    <strong>Experience Level:</strong><br />
                    Fresher
                </div>
                <div className="col-md-6 mb-3">
                    <strong>Education:</strong><br />
                    Computer Science, JIS University
                </div>
                <div className="col-md-6 mb-3">
                    <strong>Languages:</strong><br />
                    English, Hindi, Bengali
                </div>
            </div>

            <div className="d-flex gap-3 flex-wrap">
                <a href="/Pramatha_CV.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="btn-accent">
                        <i className="fas fa-download me-2"></i> Download Resume
                    </button>
                </a>
                <a href="#contact">
                    <button className="btn-outline-accent">
                        <i className="fas fa-comment-dots me-2"></i> Let's Talk
                    </button>
                </a>
            </div>
        </section>
    );
};

export default AboutDetails;
