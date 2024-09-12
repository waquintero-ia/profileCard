/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-900': '#19A1AE',
        'grey-900': '#2E3349',  
        'grey-600': '#6B7082',
        'grey-300': '#E8E9EC',
      },
      dropShadow: {
        'custom': '0px 50px 100px -20px rgba(8, 70, 94, 0.5048)',
      },
      spacing:{
        375: '23.4375rem',
        350: '21.875rem',
        326: '20.375rem',
        252: '15.75rem',
        240: '15rem',
        140: '8.75rem',
        55: '3.4375rem',
        46: '2.875rem',
        18: '1.125em',
        13: '0.8125rem',

      },
      fontSize: {
        48: '3rem',
        32: '2rem',
        18: '1.125rem',
        14: '0.875rem',
        12: '0.75rem',
        10: '0.625rem',
      },
    },
  },
  plugins: [],
}

