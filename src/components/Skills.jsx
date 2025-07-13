// src/components/Skills.jsx
import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    {name: "Java", level: 70},
    {name: "C", level: 75},
    {name: "Python", level: 70},
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Bootstrap", level: 90 },
    { name: "Git", level: 75 }
  ];

  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-box">
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
