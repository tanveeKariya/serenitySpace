import React from 'react';
import './StressReliefGames.css'; // External CSS file

const StressReliefGames = () => {
  return (
    <div className="stress-relief-container">
      <div className="stress-relief-image-section">
        <img
          alt="Person wearing a VR headset and holding controllers, standing outdoors with trees and buildings in the background"
          height="500"
          src="https://storage.googleapis.com/a1aa/image/w8es00COSTxqCq4HvjpxcgEk81LNVM85jipZBVuao7gTyAAKA.jpg"
          width="500"
        />
      </div>
      <div className="stress-relief-content-section">
        <h1>Why Play Stress-Relief Games?</h1>
        <h2>Calming Effects</h2>
        <p>Games are designed to relax your mind and reduce stress.</p>
        <h2>Mindfulness Practice</h2>
        <p>Engage in activities that promote focus and presence.</p>
        <h2>Accessible Fun</h2>
        <p>Enjoy these games anytime, anywhere.</p>
      </div>
    </div>
  );
};

export default StressReliefGames;
