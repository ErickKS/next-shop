/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/patterns/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      black: "#000",
      white: "#FFF",

      "gray-900": "#121214",
      "gray-800": "#202024",
      "gray-700": "#3B3B30",
      "gray-500": "#8D8D99",
      "gray-300": "#C4C4CC",
      "gray-100": "#E1E1E6",

      "green-500": "#00875F",
      "green-300": "#00B37E"
    },
    fontSize: {
      xl: "32px",
      lg: "24px",
      md: "20px",
      sm: "18px"
    },
    backGroundColor: {
      gradient: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%);"
    }
  },
  plugins: []
};
