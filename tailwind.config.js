/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-purple': '#4A1D96',
        'royal-gold': '#EAB308',
        'calm-blue': '#E0E7FF',
        'deep-indigo': '#312E81',
      },
    },
  },
  plugins: [],
};