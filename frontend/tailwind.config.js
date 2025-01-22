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
        18: "4.5rem", // Thêm giá trị pt-18 với 4.5rem
      },
      maxWidth: {
        selectTicket: "calc(100% * (7 / 8))", // hoặc một giá trị tùy chỉnh chính xác
      },
      backgroundImage: {
        "test-image": 'url("/public/img.png")',
      },
    },
  },
  plugins: [],
};
