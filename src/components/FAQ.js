// src/components/FAQ.js
import React from 'react';
import './FAQ.css'; // Make sure you create a corresponding CSS file for styling

const FAQ = () => {
  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <i className="fas fa-question-circle"></i>
        <div>
          <h2>How do I start?</h2>
          <p>Sign up for free and explore our tools.</p>
        </div>
      </div>
      <div className="faq-item">
        <i className="fas fa-question-circle"></i>
        <div>
          <h2>Can I track my progress?</h2>
          <p>Yes, our dashboard lets you monitor your stress levels and achievements.</p>
        </div>
      </div>
      <div className="faq-item">
        <i className="fas fa-question-circle"></i>
        <div>
          <h2>What resources are available?</h2>
          <p>We provide games, affirmations, and a library of audio and video tools.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
