import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'places', label: 'Places' },
    { to: 'travel', label: 'Travel Info' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/logo192.png" alt="Kolhapur Logo" className="h-10 w-10 rounded-full border-2 border-gold" />
          <span className="font-display text-2xl text-primary font-bold tracking-wide">Kolhapur</span>
        </div>
        <div className="hidden md:flex gap-8 text-dark font-semibold">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              className="hover:text-gold transition cursor-pointer"
              activeClass="text-gold"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-primary focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-background/95 z-40 flex flex-col items-center justify-center gap-8 transition-all animate-fade-in">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={600}
              className="text-2xl font-display text-primary hover:text-gold transition cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
