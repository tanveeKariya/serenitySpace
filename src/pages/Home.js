// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FAQ from '../components/FAQ';
import KeyFeatures from '../components/KeyFeatures';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <KeyFeatures />
      <FAQ />
    </div>
  );
};

export default Home;
