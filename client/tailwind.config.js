/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      rancho: ["Rancho", "cursive"],
    },
    extend: {
      gridTemplateColumns: {
        mediaIcons: "repeat(3, 35px)",
      },
    },
  },
  plugins: [],
};
