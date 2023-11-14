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
          letterSpacing: ".75px",
        },
        
        h3: {
          fontSize: "28px",
          letterSpacing: ".75px",
        },
        
        h4: {
          fontSize: "24px",
          letterSpacing: ".75px",
        },
        h5: {
          fontSize: "20px",
          letterSpacing: ".75px",
        },
        h5: {
          fontSize: "16px",
          letterSpacing: ".75px",
        },
        p: {
          fontSize: "14px",
          letterSpacing: ".75px",
        },
      })
    })
  ],
};