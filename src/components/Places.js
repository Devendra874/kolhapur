import React from 'react';
import { motion } from 'framer-motion';

const places = [
  {
    name: 'Mahalaxmi Temple',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    desc: 'A revered Hindu temple dedicated to Goddess Mahalaxmi, known for its stunning architecture and spiritual significance.'
  },
  {
    name: 'Rankala Lake',
    img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    desc: 'A scenic lake surrounded by gardens and temples, perfect for evening strolls and boating.'
  },
  {
    name: 'Panhala Fort',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    desc: 'A historic hill fort offering panoramic views and a glimpse into Maratha history.'
  },
  {
    name: 'Jyotiba Temple',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80',
    desc: 'A vibrant temple atop a hill, famous for its annual fairs and breathtaking vistas.'
  },
  {
    name: 'Local Markets',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    desc: 'Bustling bazaars known for Kolhapuri chappals, jewelry, and local delicacies.'
  },
];

const Places = () => (
  <section id="places" className="py-20 bg-secondary">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="font-display text-4xl text-primary font-bold mb-10 text-center">Places to Visit</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {places.map((place, idx) => (
          <motion.div
            key={place.name}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(139,26,26,0.15)' }}
            className="bg-background rounded-2xl shadow-lg overflow-hidden border-2 border-gold flex flex-col"
          >
            <img src={place.img} alt={place.name} className="h-56 w-full object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-display text-2xl text-primary mb-2">{place.name}</h3>
              <p className="text-dark/90 mb-4 flex-1">{place.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Places;
