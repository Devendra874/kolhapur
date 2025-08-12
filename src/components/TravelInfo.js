import React from 'react';
import { motion } from 'framer-motion';

const TravelInfo = () => (
  <section id="travel" className="py-20 bg-background">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-display text-4xl text-primary font-bold mb-8 text-center">Travel Information</h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden shadow-lg border-2 border-gold"
        >
          <iframe
            title="Kolhapur Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.019282019994!2d74.2432523148926!3d16.70503498850759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1001e7e7e7e7e%3A0x7e7e7e7e7e7e7e7e!2sKolhapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-display text-2xl text-gold mb-2">Getting There</h3>
          <ul className="list-disc pl-6 text-dark mb-4">
            <li><b>By Air:</b> Kolhapur Airport (10 km from city center)</li>
            <li><b>By Train:</b> Kolhapur Railway Station (well connected)</li>
            <li><b>By Road:</b> Excellent bus and taxi services from major cities</li>
          </ul>
          <h3 className="font-display text-2xl text-gold mb-2">Best Time to Visit</h3>
          <p className="text-dark mb-4">October to March (pleasant weather, festivals)</p>
          <h3 className="font-display text-2xl text-gold mb-2">Travel Tips</h3>
          <ul className="list-disc pl-6 text-dark">
            <li>Carry comfortable footwear for sightseeing</li>
            <li>Try local cuisine and sweets</li>
            <li>Respect local customs and traditions</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TravelInfo;
