/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        clothes: "url('images/clothes.jpg')",
        clothes1: "url('images/clothes1.jpg')",
      },
    },
  },
  plugins: [],
};
