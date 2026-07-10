import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MillingProcess from './components/MillingProcess';
import Products from './components/Products';
import ExportMap from './components/ExportMap';
import RiceCalculator from './components/RiceCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RiceSommelier from './components/RiceSommelier';


export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Sync the theme class with index.css HSL configurations
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.remove('light-mode');
    } else {
      root.classList.add('light-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="app-layout">
      {/* Premium Glass Header */}
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main Page Layout Sections */}
      <main>
        {/* Hero Landing */}
        <Hero />
        
        {/* About Heritage */}
        <About />

        {/* Dynamic Rice Recommendation Sommelier */}
        <RiceSommelier />


        {/* Milling Process walkthrough */}
        <MillingProcess />

        {/* Product Catalog */}
        <Products />

        {/* Global Export map */}
        <ExportMap />

        {/* Container Loading Calculator */}
        <RiceCalculator />

        {/* Quote inquiry Form */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
