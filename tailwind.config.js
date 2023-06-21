/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        bgFooterColor: "#0B0B0B",
      },
    },
  },
  plugins: [],
};
