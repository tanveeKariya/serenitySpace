import React from "react";
import "./av.css";

const Av = () => {
  return (
    <>
    <div className="body-container">
      {/* Section 1: Relax with Audio & Video */}
      <div className="audio-video-container">
        <div className="audio-video-text">
          <p>Discover curated playlists and videos for your peace of mind.</p>
          <h1>Relax with Audio & Video</h1>
          <button className="audio-video-button">Explore Resources</button>
        </div>
        <div className="audio-video-image">
          <img
            alt="A computer screen displaying a video editing software interface with various tracks and timelines."
            height="400"
            src="https://storage.googleapis.com/a1aa/image/wHy1fpR6CKX0ZKXbEN8r8zz8HUmfw4VkcvOsms48ildl9EAUA.jpg"
            width="600"
          />
        </div>
      </div>

      {/* Section 2: Relaxation and Focus */}
      <div className="relaxation-focus-container">
        <div className="relaxation-card">
          <img
            alt="Person lying on a yoga mat with headphones on, relaxing"
            src="https://storage.googleapis.com/a1aa/image/mEEfKZysKXyOJ6CoYrMYGaggNG2byAbI92uNW8PiClMFfEAUA.jpg"
          />
          <div className="relaxation-card-content">
            <h3>Meditation Music</h3>
            <p>Calming tracks to help you unwind.</p>
          </div>
        </div>
        <div className="relaxation-card">
          <img
            alt="Person listening to music with headphones in a park"
            src="https://storage.googleapis.com/a1aa/image/4YP0tp7F7PpQOlpJaU35VR83Oy4eIvfDrrPZ6uEVejMf4TAQB.jpg"
          />
          <div className="relaxation-card-content">
            <h3>Guided Relaxations</h3>
            <p>Follow along to reduce stress and find peace.</p>
          </div>
        </div>
        <div className="relaxation-card">
          <img
            alt="A serene natural environment with trees and a path"
            src="https://storage.googleapis.com/a1aa/image/zh59XbPVmK5GONHeO8jMoVrI1Lb5eWzwo4maawI8wzpMeJAoA.jpg"
          />
          <div className="relaxation-card-content">
            <h3>Nature Sounds</h3>
            <p>Immerse yourself in serene natural environments.</p>
          </div>
        </div>
        <div className="relaxation-card">
          <img
            alt="Person working at a desk with a small speaker"
            src="https://storage.googleapis.com/a1aa/image/FMUiBrAx0d6DJ5aQB2XqinuzZ5bfPmbeaOfQK4CWgQZc8JAoA.jpg"
          />
          <div className="relaxation-card-content">
            <h3>Focus Playlists</h3>
            <p>Stay productive with curated background music.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="av-container">
   <div class="av-image-section">
    <img alt="A scenic forest path with tall trees and a rocky trail" height="400" src="https://storage.googleapis.com/a1aa/image/mZUrKIN8gop1JBiTD0Q81DA4Ff6QBV79o28ameIZNc0FDFAUA.jpg" width="600" class="av-image"/>
   </div>
   <div class="av-content-section">
    <h1 class="av-heading">
     Why Use Audio &amp; Video Resources?
    </h1>
    <div class="av-feature">
     <h2 class="av-feature-heading">
      Ease of Access
     </h2>
     <p class="av-feature-description">
      Stream playlists and videos anytime, anywhere.
     </p>
    </div>
    <div class="av-feature">
     <h2 class="av-feature-heading">
      Variety of Choices
     </h2>
     <p class="av-feature-description">
      From meditation to focus, find the perfect match for your needs.
     </p>
    </div>
    <div class="av-feature">
     <h2 class="av-feature-heading">
      Scientifically Curated
     </h2>
     <p class="av-feature-description">
      Expert-recommended tracks to enhance relaxation and productivity.
     </p>
    </div>
   </div>
</div>

    </>
  );
};

export default Av;
