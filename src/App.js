// src/App.js
import React from 'react';
import Home from './pages/Home';
import Game from './components/game1';
import './App.css';
import Footer from './components/Footer';
import RelaxingGames from './components/RelaxingGames';
import StressReliefGames from './components/StressReliefGames';
import WhyAffirmationsMatter from './components/WhyAffirmationsMatter';
import { DiscoverServices, WellnessResources } from './components/DiscoverServices';  
import FindYourPositivity from './components/FindYourPositivity';

const App = () => {
  return (
    <div>
      <Navbar />
     < Home />
    <Hero />
    <KeyFeatures />
    <FAQ /> 
    <Game />
      <RelaxingGames />
      <StressReliefGames />
      <DiscoverServices />
      <WellnessResources />
      <FindYourPositivity />
      <WhyAffirmationsMatter /> 
      <Footer />
    </div>
  );
};

export default App;
