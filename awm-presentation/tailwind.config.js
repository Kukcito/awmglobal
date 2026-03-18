/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'awm-deepest': '#0b1610',
        'awm-dark': '#12331c',
        'awm-institutional': '#1a3e24',
        'awm-medium': '#224b2d',
        'awm-forest': '#2a6d2f',
        'awm-bright': '#2f7b33',
        'awm-vivid': '#3a9336',
        'awm-primary': '#45ac41',
        'awm-teal': '#459860',
        'awm-lime': '#69b32d',
        'awm-light': '#d7ead9',
        'awm-yellow-green': '#b9cc05',
        'awm-yellow': '#dedc00',
        'awm-yellow-light': '#edec85',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
