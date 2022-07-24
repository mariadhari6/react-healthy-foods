/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        75: "300px",
      },
      height: {
        banner: "420px",
      },
      maxHeight: {
        banner: "420px",
      },
      padding: {
        badge: "2px",
      },
    },
  },
  plugins: [],
};
