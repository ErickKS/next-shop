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
      white: "#f5f5f5",

      "gray-900": "#111111",
      "gray-800": "#1A1C1E",
      "gray-700": "#515151",
      "gray-100": "#D1D1D2",

      "green-500": "#44D62C",
      "green-300": "#73E161"
    },
    fontSize: {
      xl: "32px",
      lg: "24px",
      md: "20px",
      sm: "18px"
    },
    extend: {
      animation: {
        translate: "translate .1s linear forwards"
      },
      keyframes: {
        translate: {
          "0%": { transform: "translateX(120px)" },
          "100%": { transform: "translateX(0)" }
        }
      }
    }
  },
  plugins: []
};
