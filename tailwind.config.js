/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FEFB",
        secondary: "#1786F9",
        third: "#0d1a33",

      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        hind: ["Hind", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
