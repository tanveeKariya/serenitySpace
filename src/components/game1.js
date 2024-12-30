import React from 'react';
import './game.css';

const Game = () => {
  return (
    <div className="game-container">
      <div className="game-text-content">
        <p><b>Explore games designed to bring you peace and tranquility.</b></p>
        <h1>Relax and Play</h1>
        <button onClick={() => alert('Game is loading...') }>Play Now</button>
      </div>
      <div className="game-image-content">
        <img
          src="https://storage.googleapis.com/a1aa/image/ptRkpFZhNNIlM5PsqITzRFvfael2gJqnnUu1EtRqeUf9lBAQB.jpg"
          alt="A person holding a colorful puzzle cube, sitting on a couch in a calm environment"
         
        />
      </div>
    </div>
  );
};

export default Game;
