/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          softOrange: "hsl(35, 77%, 62%)",
          softRed: "hsl(5, 85%, 63%)",
        },
        Neutral: {
          Offwhite: "hsl(36, 100%, 99%)",
          grayishBlue: "hsl(233, 8%, 79%)",
          darkGrayishBlue: "hsl(236, 13%, 42%)",
          veryDarkBlue: "hsl(240, 100%, 5%)",
        },
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
