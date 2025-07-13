// src/components/Project.jsx
import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Weatherdatetime",
    description: "A Weather Web App where you can find updated weather data by searching you location.",
    image: "/weather.png", 
    tags: ["React", "Bootstrap", "Express", "API"],
    demoLink: "https://weatherdatetime.netlify.app",
    codeLink: "/",
  },
  {
    title: "Readersrefuge",
    description: "It's an excellent open library where you can find and read any type of books.",
    image: "/readersrefuge.jpeg",
    tags: ["React", "Bootstrap","Vite", "Express", "API"],
    demoLink: "https://readersrefuge.netlify.app/",
    codeLink: "/",
  },
  {
    title: "Glowhaven",
    description: "It's an E-commerce website where you can explore and oder products.",
    image: "/glowhaven.jpeg",
    tags: ["React", "Bootstrap","Vite", "Express", "Custom API", "Custom Dataset"],
    demoLink: "https://gllowhaven.netlify.app",
    codeLink: "/"
  },
  {
    title: "Thewrenchking",
    description: "This website fir brand promotion.",
    image: "/thewrenchking.jpeg",
    tags: ["React", "Bootstrap", "Vite", "Express", "MongoDB", "Custom API", "Custom Dataset"],
    demoLink: "https://thewrenchking.netlify.app",
    codeLink: "/"
  },
  {
    title: "TechAsset",
    description: "TechAsset is a website where you can book service for your electronic devices as a customer. And you can also register yourself as a technician.",
    image: "/techasst.jpeg",
    tags: ["React", "Bootstrap", "Vite", "Express", "MongoDB", "Custom API", "Custom Dataset"],
    demoLink: "https://github.com/pramathapaul/TechAsset.git",
    codeLink: "https://github.com/pramathapaul/TechAsset.git"
  }
];

const Project = () => {
  return (
    <section id="projects" className="project-section container py-5">
      <button className="btn-intro mb-3">My Projects</button>
      <div className="row">
        {projects.map((proj, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="project-card">
              <img src={proj.image} alt={proj.title} className="project-img" />
              <div className="project-body">
                <h5 className="project-title">{proj.title}</h5>
                <p className="project-desc">{proj.description}</p>
                <div className="project-tags">
                  {proj.tags.map((tag, i) => (
                    <span className="tag" key={i}>
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="project-links mt-3">
                  <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" className="btn-accent me-2">Live</a>
                  <a href={proj.codeLink} target="_blank" rel="noopener noreferrer" className="btn-outline-accent">Code</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
