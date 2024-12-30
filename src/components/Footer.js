import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-description">
            Helping you manage stress and live a happier life with our innovative solutions and resources.
          </p>
        </div>

        {/* Center Section */}
        <div className="footer-center">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/">Stress-Relief Games</a></li>
            <li><a href="/">Our Services</a></li>
            <li><a href="/">Positive Affirmations</a></li>
            <li><a href="/">Audio & Video Resources</a></li>
           
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
          {/*  eslint-disable-next-line*/}
          <a href="www.google.com" target="_blank" rel="noopener noreferrer" className="icon facebook" aria-label="Follow us on Facebook"></a>
           {/*  eslint-disable-next-line*/}
            <a href="www.google.com" target="_blank" rel="noopener noreferrer" className="icon twitter" aria-label="Follow us on Twitter"></a>
           {/*  eslint-disable-next-line*/}
            <a href="www.google.com" target="_blank" rel="noopener noreferrer" className="icon instagram" aria-label="Follow us on Instagram"></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 SoulSync. All Rights Reserved.</p>
        <p>Created by <strong>Tanvee Kariya</strong>, dedicated to the betterment of people's lives.</p>
      </div>
    </footer>
  );
};

export default Footer;
