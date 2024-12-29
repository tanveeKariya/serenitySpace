// src/components/KeyFeatures.js
import React from 'react';
import './KeyFeatures.css';

const KeyFeatures = () => {
  return (
    <div className="key-features">
      <div className="container">
        <div className="image-section">
          <img
            src="pexels-photo-268974.jpeg"
            alt="A stone staircase covered with autumn leaves, surrounded by trees with yellow and orange leaves"
            className="image"
          />
        </div>
        <div className="content-section">
          <h2 className="title">Discover Our Key Features</h2>
          <div className="feature">
            <h3 className="feature-title">Stress-Relief Games</h3>
            <p className="feature-description">
              Engage in relaxing games designed to help you unwind.
            </p>
          </div>
          <div className="feature">
            <h3 className="feature-title">Daily Affirmations</h3>
            <p className="feature-description">
              Receive positive affirmations to boost your mood.
            </p>
          </div>
          <div className="feature">
            <h3 className="feature-title">Comprehensive Resources</h3>
            <p className="feature-description">
              Access a library of stress management tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
