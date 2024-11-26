import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        rancho: ['Rancho', 'cursive'],
      },
      colors : {
        main : "#331A15",
        text : "#1B1A1A",
        pin: "#E3B577"
      }
    },
  },
  plugins: [daisyui],
}