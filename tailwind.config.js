/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        75: "300px",
      },
      height: {
        banner: "421px",
      },
      maxHeight: {
        banner: "421px",
      },
      padding: {
        badge: "2px",
      },
    },
  },
  plugins: [],
};
