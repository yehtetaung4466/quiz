
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      '32': '6rem',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}