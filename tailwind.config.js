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
    },
  },
  plugins: [],
};