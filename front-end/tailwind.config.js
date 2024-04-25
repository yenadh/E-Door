/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'lg':'1024px',
      '3xl':'1800px',
    },

    extend: {
      fontFamily:{
        DM_Sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        Rubik:['"Rubik"', ...defaultTheme.fontFamily.sans],
      }      
    },

    colors:{
      'primary':'#4F0E0E',
      'Secondary':'#BB8760',
      'tertiary':'#FFDADA',
      'forth':'#FFF1F1',
    }
  },
  plugins: [],
}

