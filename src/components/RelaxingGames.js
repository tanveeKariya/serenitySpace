import React from "react";
import "./RelaxingGames.css";

const RelaxingGames = () => {
  const games = [
    {
      title: "Zen Garden",
      image: "./rg1.jpg",
      alt: "A beautiful Zen garden with traditional Japanese architecture and vibrant flowers.",
      link: "/zen-garden", // Update with the actual game link or route
      description: "Build a virtual Zen garden by dragging and dropping elements like sand, rocks, and plants."
    },
    {
      title: "Mandala Coloring",
      image: "rg2.jpg",
      alt: "A person coloring a mandala design while holding a cup of coffee.",
      link: "/mandala-coloring", // Update with the actual game link or route
      description: "Color beautiful mandala patterns and enjoy a relaxing, creative process."
    },
    {
      title: "Tranquil Puzzles",
      image: "rg3.jpg",
      alt: "A person pointing at a tranquil puzzle on a piece of paper.",
      link: "/tranquil-puzzles", // Update with the actual game link or route
      description: "Solve calming puzzles to clear your mind and reduce stress."
    },
    {
      title: "Puzzle Game (Sudoku/Tile Matching)",
      image: "rg4.jpg", // Replace with a relevant image
      alt: "A Sudoku or Tile Matching puzzle game.",
      link: "/puzzle-game", // Update with the actual game link or route
      description: "Solve Sudoku or tile-matching puzzles to engage your mind while relaxing."
    },
    {
      title: "Memory Match (Card Flip)",
      image: "rg5.jpg", // Replace with a relevant image
      alt: "Card flip memory game.",
      link: "/memory-match", // Update with the actual game link or route
      description: "Flip cards to find matching pairs, improving your memory and concentration."
    },
    {
      title: "Coloring Game",
      image: "rg6.jpg", // Replace with a relevant image
      alt: "A digital coloring game.",
      link: "/coloring-game", // Update with the actual game link or route
      description: "Relax by coloring beautiful illustrations and letting your creativity flow."
    },
    {
      title: "Breathing Exercises (Interactive)",
      image: "rg7.jpg",
      width : 400 ,
      height : 300 ,
      alt: "Interactive breathing exercises.",
      link: "/breathing-exercises", // Update with the actual game link or route
      description: "Follow a pulsating circle or timer for guided breathing exercises to calm your mind."
    },
    {
      title: "Nature-Themed Memory Path Game",
      image: "rg8.jpg", // Replace with a relevant image
      alt: "A memory path game based on nature.",
      link: "/nature-memory-path", // Update with the actual game link or route
      description: "Recreate a nature path by remembering a sequence of flowers or leaves."
    },
    {
      title: "Zen Garden Builder",
      image: "rg9.jpg", // Replace with a relevant image
      alt: "Zen garden builder game.",
      link: "/zen-garden-builder", // Update with the actual game link or route
      description: "Create a peaceful Zen garden by arranging sand, rocks, and plants."
    },
    {
      title: "Bubble Wrap Pop",
      image: "rg10.jpg", // Replace with a relevant image
      alt: "Simulating bubble wrap popping.",
      link: "/bubble-wrap-pop", // Update with the actual game link or route
      description: "Pop virtual bubble wrap for a fun and stress-relieving experience."
    },
    {
      title: "Mandala Spinner",
      image: "rg11.jpg", // Replace with a relevant image
      alt: "A mandala spinner game.",
      link: "/mandala-spinner", // Update with the actual game link or route
      description: "Create and spin your own mandalas for a relaxing and creative activity."
    },
    {
      title: "Guided Meditation Games",
      image: "rg12.jpg", // Replace with a relevant image
      alt: "A guided meditation game.",
      link: "/guided-meditation", // Update with the actual game link or route
      description: "Experience guided meditation with interactive elements and soothing audio."
    },
    {
      title: "Simple Music Maker",
      image: "rg13.jpg", // Replace with a relevant image
      alt: "A simple music maker game.",
      
      link: "/simple-music-maker", // Update with the actual game link or route
      description: "Create soothing melodies by clicking on a grid of musical notes."
    }
  ];

  return (
    <div className="relaxing-games-container">
      <h1 className="relaxing-games-title">Relaxing Games</h1>
      <div className="relaxing-games-grid">
        {games.map((game, index) => (
          <div className="relaxing-game-card" key={index}>
            <a href={game.link}>
              <img src={game.image} alt={game.alt} className="relaxing-game-image" />
              <div className="relaxing-game-title">{game.title}</div>
              <div className="relaxing-game-description">{game.description}</div>
              <div className="relaxing-game-price">Free</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelaxingGames;
