module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#8B1A1A', // Deep Red
        gold: '#D4AF37',    // Gold
        earth: '#7C4F29',   // Earthy Brown
        accent: '#B76E79',  // Muted Rose
        background: '#F8F5F2', // Light background
        secondary: '#F3E9DC', // Soft beige
        dark: '#2D1B0E',    // Deep brown for text
      },
      fontFamily: {
        sans: ['Merriweather', 'Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}