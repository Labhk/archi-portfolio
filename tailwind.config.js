// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
      },
      colors: {
        customGreen: '#c4e45a',
        customBlue: '#b7e6f8',
        customOrange: '#f78d24',
        customPurple: '#b31867',
        customTurquoise: '#3cb95a',
        customRed: '#ef2236',
        customTeal: '#3f7175',
        customMaroon: '#56050b',
        customCyan: '#78d3e5',
        customPink: '#f57e8b',
      },
    },
  },
  plugins: [],
};
