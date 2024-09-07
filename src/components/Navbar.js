import React from 'react';
import '../index.css'; 
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt='two angular brackets facing each other'  />
        <p>DevSync</p>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/profile">About</a></li>
        <li><a href="/profile">Docs</a></li>
        <li><a href="/projects">Projects</a></li>
      </ul>
      <div className="navbar-cta">
        <a href="/create-project" className="cta-btn">Create Project</a>
      </div>
    </nav>
  );
};

export default Navbar;
