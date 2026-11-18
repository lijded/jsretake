import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Offer from './components/Offer/Offer';
import About from './components/About/About';
import Services from './components/Services/Services';
import Rental from './components/Rental/Rental';
import './App.css';

export default function App() {
  return (
    <div className="page">
      <div className="intro" id="about">
        <Header />
        <Hero />
      </div>
      <main>
        <Offer />
        <About />
        <Services />
        <Rental />
      </main>
    </div>
  );
}
