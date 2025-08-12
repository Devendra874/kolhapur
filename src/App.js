
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Places from './components/Places';
import TravelInfo from './components/TravelInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="font-sans bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Places />
        <TravelInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
