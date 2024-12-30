import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
      {/* // eslint-disable-next-line  */}
        <a href="www.google.com">Serenity Space</a> {/* Changed to "#" */}
      </div>
      <div className="nav-links">
        <a href="www.google.com">Home</a> {/* Changed to "#" */}
        <a href="www.google.com">Stress-Relief Games</a> {/* Changed to "#" */}
        <a href="www.google.com">Our Services</a> {/* Changed to "#" */}
        <a href="www.google.com">Positive Affirmations</a> {/* Changed to "#" */}
        <a href="www.google.com">Audio & Video Resources</a> {/* Changed to "#" */}
        
        
      </div>
    </div>
  );
};

export default Navbar;
