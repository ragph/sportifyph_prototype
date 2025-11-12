/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  safelist: [
    'bg-brand-primary',
    'bg-brand-primary-dark',
    'bg-brand-primary-light',
    'bg-brand-accent',
    'bg-brand-accent-dark',
    'bg-brand-accent-light',
    'text-brand-primary',
    'text-brand-primary-dark',
    'text-brand-primary-light',
    'text-brand-accent',
    'text-brand-accent-dark',
    'text-brand-accent-light',
    'border-brand-primary',
    'border-brand-accent',
    'hover:bg-brand-primary',
    'hover:bg-brand-primary-dark',
    'hover:text-brand-primary',
    'focus:ring-brand-primary',
    'from-brand-primary',
    'to-brand-primary-light',
  ],
  theme: {
    extend: {
      colors: {
        // Sportify PH Brand Colors
        brand: {
          primary: '#0079FF',      // Deep Blue - Primary brand color
          'primary-dark': '#002A5C', // Darker shade for hover states
          'primary-light': '#469EFF', // Lighter shade for backgrounds
          accent: '#ABE900',       // Lime Green - Accent color
          'accent-dark': '#8BC600', // Darker accent for hover states
          'accent-light': '#C5F333', // Lighter accent for backgrounds
        },
        // Dark mode specific colors
        dark: {
          bg: '#0a0e1a',           // Very dark blue-black background
          'bg-secondary': '#131929', // Slightly lighter dark background
          'bg-tertiary': '#1a2235', // Card/component background
          'bg-hover': '#212b42',   // Hover state background
          border: '#2d3748',       // Border color
          text: '#e2e8f0',         // Primary text
          'text-secondary': '#a0aec0', // Secondary text
          'text-muted': '#718096', // Muted text
        },
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
