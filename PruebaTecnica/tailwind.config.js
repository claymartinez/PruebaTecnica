/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    screens: {
      xs: "480px",
      ms: "790px",
      md: "1080px",
      lg: "1200px",
      xl: "1480px",
      xxl: "1899px",
      xxxl: "1920px",
    },
  },
  plugins: [],
};