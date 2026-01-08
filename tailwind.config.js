/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#1e40af', // blue-800
          light: '#3b82f6',   // blue-500
          dark: '#1e3a8a',    // blue-900
        },
      },
    },
  },
  plugins: [],
};
