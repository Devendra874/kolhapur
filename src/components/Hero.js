import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary via-earth to-gold overflow-hidden">
    {/* Parallax/animated background can be added here */}
    <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
      <source src="/kolhapur-hero.mp4" type="video/mp4" />
    </video>
    <div className="relative z-10 text-center text-dark max-w-2xl mx-auto px-4">
      <motion.h1 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="font-display text-5xl md:text-7xl font-bold mb-6 text-gold drop-shadow-lg"
      >
        Discover Kolhapur
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl text-background mb-8 font-sans"
      >
        Where Heritage Meets Hospitality
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 1, duration: 0.7 }}
        className="flex flex-col md:flex-row gap-4 justify-center"
      >
        <a href="#places" className="bg-gold text-dark px-8 py-3 rounded-full font-bold shadow-lg hover:bg-primary hover:text-gold transition text-lg">Explore Places</a>
        <a href="#contact" className="bg-primary text-gold px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gold hover:text-dark transition text-lg">Contact Us</a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
