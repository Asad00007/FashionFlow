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
        "md-1200": "1200px",
        "md-900": "900px",
        "md-1100": "1100px",
        "md-1150": "1150px",
        "sm-500": "500px",
        "sm-600": "600px",
      },
      minHeight: {
        "height-minus-hundred": "calc(100vh - 81px)",
      },
    },
  },
  plugins: [],
};
