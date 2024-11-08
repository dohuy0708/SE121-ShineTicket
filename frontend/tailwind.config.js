/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main": "#27272A",
        primary: "#ffc107",
      },
      spacing: {
        18: "4.5rem", // Thêm giá trị pt-18 với 4.5rem
      },
    },
  },
  plugins: [],
};
