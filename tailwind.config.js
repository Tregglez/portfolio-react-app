/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "grain-light": "url('assets/background.jpeg')",
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
};
