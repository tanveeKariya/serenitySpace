import React from "react";
import ReactDOM from "react-dom/client"; // Use the new 'react-dom/client' package
import Navbar from "./components/Navbar"; // Importing Navbar directly
import './index.css';
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import KeyFeatures from "./components/KeyFeatures";
import FAQ from "./components/FAQ";
import RelaxingGames from "./components/RelaxingGames";
import Game from "./components/game1"; 
import StressReliefGames from "./components/StressReliefGames";
import { DiscoverServices,WellnessResources } from "./components/DiscoverServices";
import FindYourPositivity from "./components/FindYourPositivity";
import Av from "./components/av";

// Create a root using createRoot()
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render both Navbar and Hero components
root.render(
  <>
    <Navbar />
    <Hero />
    <KeyFeatures />
    <FAQ /> 
    <Game />
    <RelaxingGames />
    <StressReliefGames />
    <DiscoverServices />
    <WellnessResources />
    <FindYourPositivity />
    <Av />
 
    
    <Footer />
  

   
  </>
);
