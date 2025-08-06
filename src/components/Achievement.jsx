import React, { useEffect, useState } from "react";
import "./AutoSlider.css";

const slides = [
  {
    id: 1,
    title: "Introduction to Data Science",
    description: "ICompleted Introduction to Data Science course from Infosys Springboard, exploring fundamentals like data analysis, visualization, and basic machine learning.",
    image: "../assets/1-63f6813d-f268-4222-8c49-c5a5ec5ba8bc_pages-to-jpg-0001.jpg",
  },
  {
    id: 2,
    title: "Generative AI for ALL",
    description: "Completed Generative AI for ALL course from Infosys Springboard, covering core concepts of AI and its real-world applications.",
    image: "../assets/1-86018921-cc89-4913-90f4-566126a9bd2c_page-0001.jpg",
  },
  {
    id: 3,
    title: "Full Stack Web Developer",
    description: "Completed Full Stack Web Developer course at Ardent Computech Pvt. Ltd., gaining hands-on experience in front-end and back-end development.",
    image: "../assets/doc_page-0001.jpg",
  },
  {
    id: 4,
    title: "Programming in Java",
    description: "Completed Programming in Java course from NPTEL & IIT Kharagpur, covering core concepts of Java",
    image: "../assets/Programming In Java_nptel_page-0001.jpg",
  },
];

const Achievement = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 3s autoplay
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="achievement" className="contact-section">
      <div className="slider-container">
        <h2 className="contact-title">My Achievements</h2>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === current ? "active" : ""}`}
          >
            <div className="slide-content">
              <div className="text">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
              <div className="image">
                <img src={slide.image} alt={slide.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;

