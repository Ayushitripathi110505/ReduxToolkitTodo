/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // <--- THIS IS REQUIRED
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // <--- very important
  theme: {
    extend: {},
  },
  plugins: [],
};