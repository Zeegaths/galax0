/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Scan app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // Scan app directory
    "./components/**/*.{js,ts,jsx,tsx}", // Scan components directory
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#1c1c28",
          800: "#2a2a3c",
          700: "#343447",
        },
        customOrange: '#01FEFE',        
      },
      
    },
  },
  plugins: [],
};
