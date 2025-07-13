// Sidebar.jsx
import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const sectionIds = ['home', 'about', 'projects', 'skills', 'contact'];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run initially

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="d-md-none position-fixed p-3 top-0 end-0 m-3 z-3 bg-transparent">
        <button className="btn-icon" onClick={() => setOpen(true)}>☰</button>
      </div>

      {/* Sidebar */}
      <div className={`sidebar text-white ${open ? 'open' : ''}`}>
        <div className="sidebar-header d-flex justify-content-between align-items-center p-3">
          <h5 className="m-0"></h5>
          <button className="btn text-white d-md-none" onClick={() => setOpen(false)}>✖</button>
        </div>

        <ul className="nav flex-column px-3">
          {sectionIds.map((id) => (
            <li className="nav-item" key={id}>
              <a
                href={`#${id}`}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Overlay */}
      {open && <div className="overlay d-md-none" onClick={() => setOpen(false)}></div>}
    </>
  );
};

export default Sidebar;
