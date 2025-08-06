import React from "react";
import projects from "../data/projectsData";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="project-head">My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-img" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span className="tag" key={idx}>#{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn-outline-accent">
                Code
              </a>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-accent">
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
