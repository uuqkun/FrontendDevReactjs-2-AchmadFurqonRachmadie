const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "accent-blue": "#002B56",
        "closed-red": "#FF1A42",
        "open-green": "#00ECA2"
      },
      fontFamily: { 
        "quicksand": "quicksand, sans-serif"
      }
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        h2: {
          fontSize: "36px",
        },
        
        h3: {
          fontSize: "28px",
        },
        
        h4: {
          fontSize: "24px",
        },
        h5: {
          fontSize: "20px",
        },
        h5: {
          fontSize: "16px",
        },
        p: {
          fontSize: "14px",
          letterSpacing: ".75px",
        },
      })
    })
  ],
};