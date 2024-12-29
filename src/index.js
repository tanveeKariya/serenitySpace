import React from "react";
import ReactDOM from "react-dom/client"; // Use the new 'react-dom/client' package
import Navbar from "./components/Navbar"; // Importing Navbar directly
import './index.css';
import Hero from "./components/Hero";
import KeyFeatures from "./components/KeyFeatures";
import FAQ from "./components/FAQ";

// Create a root using createRoot()
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render both Navbar and Hero components
root.render(
  <>
    <Navbar />
    <Hero />
    <KeyFeatures />
    <FAQ /> 

   
  </>
);
