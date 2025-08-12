import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-secondary py-8 mt-16">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <img src="/logo192.png" alt="Kolhapur Logo" className="h-8 w-8 rounded-full border border-gold" />
        <span className="font-display text-lg font-bold tracking-wide">Kolhapur Tourism</span>
      </div>
      <div className="flex gap-6 text-gold text-xl">
        <a href="#" aria-label="Facebook" className="hover:text-primary"><i className="fab fa-facebook"></i></a>
        <a href="#" aria-label="Instagram" className="hover:text-primary"><i className="fab fa-instagram"></i></a>
        <a href="#" aria-label="Twitter" className="hover:text-primary"><i className="fab fa-twitter"></i></a>
      </div>
      <div className="text-sm text-secondary/80">© {new Date().getFullYear()} Kolhapur Tourism. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
