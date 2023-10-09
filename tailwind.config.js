/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
      offbit: ["Offbit", "sans-serif"],
    },
    extend: {
      colors: {
        bgFooterColor: "#0B0B0B",
        lightGreenAccent: "#93c69b",
      },
    },
  },
  plugins: [],
};
