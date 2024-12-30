// src/components/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <img
        alt=" serene sky with clouds"
        src="/image.jpg"
        className="hero-image"
      />
      <div className="hero-text">
        <h1>Your Journey to Serenity Begins Here</h1>
        <p>Find peace and balance in your daily life with our tools and resources.</p>
        <a className="btn" href="/">Explore Now</a>
      </div>
    </div>
  );
};

export default Hero;
