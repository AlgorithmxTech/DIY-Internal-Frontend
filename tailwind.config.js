/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          blueDark:'#09189D',
          blueLight:'#007BFF',
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(to left, #007BFF 29%, #081BC8 35%)',
      },
    },
  },
  plugins: [],
}