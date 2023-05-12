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
      transparent: "transparent",

      "gray-900": "#111111",
      "gray-800": "#1A1C1E",
      "gray-700": "#515151",
      "gray-600": "#767778",
      "gray-100": "#959595",

      "green-500": "#44D62C",
      "green-300": "#73E161"
    },
    fontSize: {
      xl: "32px",
      lg: "24px",
      md: "20px",
      sm: "18px",
      xs: "14px"
    },
    extend: {
      boxShadow: {
        left: "0 0 6px #00FF00",
        center: "0px 0px 2px 1px #44d62c66"
      },
      animation: {
        translate: "translate .1s linear forwards",
        opacity: "opacity .3s linear forwards"
      },
      keyframes: {
        translate: {
          "0%": { transform: "translateX(120px)" },
          "100%": { transform: "translateX(0)" }
        },
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    }
  },
  plugins: []
};
