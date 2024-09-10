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
    },
  },
  plugins: [],
}

