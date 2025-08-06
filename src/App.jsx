import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Loader from "./components/Loader"; 
import Achievement from "./components/Achievement";
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="d-md-flex app-container">
      <Sidebar />
      <div className="flex-grow-1 main-content p-4">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="projects" className="section">
          <Project />
        </section>
        <section id="skills" className="section">
          <Skills />
        </section>
        <section id="achievement" className="section">
          <Achievement />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
