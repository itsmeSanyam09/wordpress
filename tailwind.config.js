/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}','./public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        fluid: 'clamp(1rem, 2vw, 2rem)',
      },
    },
  }
  ,
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
