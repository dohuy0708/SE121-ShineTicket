/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main": "#27272A",
        "bg-secondary": "#393F4E",
        primary: "#ffc107",
      },
      spacing: {
        hheader: "4rem",
        wsidebar: "16rem",
      },
    },
  },
  plugins: [],
};
