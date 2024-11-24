/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#121212",
          secondary: "#1E1E1E",
        },
        text: {
          // primary: "#FFFFFF",
          // primary: "#7a5725",
          // primary: "#a87731",
          primary: "#885e23",
          secondary: "#B3B3B3",
          placeholder: "#8C8C8C",
        },
        accent: {
          primary: "#4CAF50",
          secondary: "#1E88E5",
          warning: "#F44336",
        },
        border: "#333333",
      },
    },
  },
  plugins: [],
};
