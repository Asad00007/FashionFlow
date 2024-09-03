/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#f5f8fa",
        secondary: "#1b2834",
      },
      screens: {
        "md-900": "900px",
      },
    },
  },
  plugins: [],
};
