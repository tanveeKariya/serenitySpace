// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="www.google.com">Serenity Space</a>
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Stress-Relief Games</a>
        <a href="#">Our Services</a>
        <a href="#">Positive Affirmations</a>
        <a href="#">Audio & Video Resources</a>
        <a href="#">Therapist Directory</a>
        <a href="#">Mindful Practices</a>
      </div>
    </div>
  );
};

export default Navbar;  // Make sure this is a default export
