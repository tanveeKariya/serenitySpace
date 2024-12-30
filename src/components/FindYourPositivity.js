import React from "react";
import "./FindYourPositivity.css";

const FindYourPositivity = () => {
  return (
    <>
      <div className="fyp-container">
        <div className="fyp-text-content">
          <p className="fyp-description">
            Discover affirmations to uplift and empower you.
          </p>
          <h1 className="fyp-title">Find Your Positivity</h1>
          {/* eslint-disable-next-line */}
          <a className="fyp-btn" href="#">
            Get Started
          </a>
        </div>
        <div className="fyp-image-content">
          <img
            className="fyp-image"
            src="https://storage.googleapis.com/a1aa/image/qrE5AxJePuSJO6kXxDyjnlaYb3o4di89tS6eSlv28RDKYEAUA.jpg"
            alt="A framed sign with the text 'SELF CARE ISN'T SELFISH' on a pink background with shadows of leaves."
            width="600"
            height="400"
          />
        </div>
        
      </div>
      <div className="affirmation-container">
          {[
            {
              title: "Gratitude Affirmations",
              description: "Cultivate a mindset of thankfulness.",
              imgSrc:
                "https://storage.googleapis.com/a1aa/image/tIOfeWceLUZ3JJifg282HpmdmO7FBllk2OOKlEZ7qGBQrRAQB.jpg",
              imgAlt:
                "A person standing in a scenic outdoor setting with arms outstretched.",
            },
            {
              title: "Confidence Boosters",
              description: "Strengthen self-belief and determination.",
              imgSrc:
                "https://storage.googleapis.com/a1aa/image/fpRBo5R363zyC6yI4UNGexYg7rBjE7NE2LFJZ8TVgqmwaEAUA.jpg",
              imgAlt:
                "A person wearing a hat and scarf, looking determined.",
            },
            {
              title: "Relaxation Mantras",
              description: "Encourage calm and inner peace.",
              imgSrc:
                "https://storage.googleapis.com/a1aa/image/wpRC7oOM1j6eMKp4Ta6VoofCtTFNRQCMGYRPh3J1yTDyaEAUA.jpg",
              imgAlt: "A person meditating in a lush green forest.",
            },
            {
              title: "Morning Positivity",
              description: "Start your day with uplifting thoughts.",
              imgSrc:
                "https://storage.googleapis.com/a1aa/image/pWGVIUUk63r8Bh2aEfbWXCcejRL2sKmWr1XiCuNCM8gvaEAUA.jpg",
              imgAlt: "A hand reaching towards sunlight through a window.",
            },
          ].map((affirmation, index) => (
            <div className="affirmation-card" key={index}>
              <img
                alt={affirmation.imgAlt}
                src={affirmation.imgSrc}
                className="affirmation-image"
              />
              <div className="affirmation-content">
                <div className="affirmation-title">{affirmation.title}</div>
                <div className="affirmation-description">
                  {affirmation.description}
                </div>
              </div>
            </div>
          ))}
        </div>

      {/* Why Affirmations Matter Section */}
      <div className="why-affirmations-matter__container">
        <div className="why-affirmations-matter__image-section">
          <img
            alt="Sticky notes on a mirror with motivational messages."
            height="600"
            src="https://storage.googleapis.com/a1aa/image/0PtSBDZIa6bBP1vQMO3veeuWetuiWMKEPusfoZtiof5PhVAgC.jpg"
            width="450"
          />
        </div>
        <div className="why-affirmations-matter__content-section">
          <h1>Why Affirmations Matter</h1>
          <h2>Enhance Positivity</h2>
          <p>Shift your mindset toward optimism and happiness.</p>
          <h2>Boost Mental Health</h2>
          <p>Reduce stress and build emotional resilience.</p>
          <h2>Inspire Growth</h2>
          <p>Encourage personal development and self-love.</p>
        </div>
      </div>
    </>
  );
};

export default FindYourPositivity;
