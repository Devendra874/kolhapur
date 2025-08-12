import React from 'react';
import { motion } from 'framer-motion';


const About = () => (
  <section id="about" className="py-20 bg-background">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
      <motion.div 
        initial={{ opacity: 0, x: -60 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="About Kolhapur" className="rounded-2xl shadow-xl border-4 border-gold w-full object-cover" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 60 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <h2 className="font-display text-4xl text-primary font-bold mb-4">About Kolhapur</h2>
        <p className="text-lg text-dark mb-4 font-sans">
          Kolhapur, the city of goddess Mahalaxmi, is a vibrant blend of history, culture, and natural beauty. Known for its majestic temples, royal palaces, bustling markets, and delectable cuisine, Kolhapur offers a unique experience for every traveler.
        </p>
        <ul className="list-disc pl-6 text-dark/90 space-y-2">
          <li>Rich cultural heritage and festivals</li>
          <li>Famous Kolhapuri chappals and jewelry</li>
          <li>Delicious spicy cuisine and sweets</li>
          <li>Historic sites and scenic landscapes</li>
        </ul>
      </motion.div>
    </div>
  </section>
);

export default About;
