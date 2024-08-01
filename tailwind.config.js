/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.js",
    "./*.json"
  ],

  theme: {
    container: {
      center: true,
      padding: '2rem'
    },

    colors: {
      blue: 'hsl(246, 80%, 60%)',
      orange: 'hsl(15, 100%, 70%)', //work
      lightBlue: 'hsl(195, 74%, 62%)',//play, softblue
      lightRed: 'hsl(348, 100%, 68%)', //study, lightred
      limeGreen: 'hsl(145, 58%, 55%)', //exercise
      violet: 'hsl(264, 64%, 52%)', //social
      softOrange: 'hsl(43, 84%, 65%)', //self care
      veryDarkBlue: 'hsl(226, 43%, 10%)',
      darkBlue: 'hsl(235, 46%, 20%)',
      desaturatedBlue: 'hsl(235, 45%, 61%)',
      paleBlue: 'hsl(236, 100%, 87%)',
      white: 'hsl(0, 0%, 100%)',
      hoverDarkBlue: 'hsla(226, 43%, 10%, 0.85)',
      black: 'hsl(0, 100%, 0%)'
    },

    screens: {
      md: '960px',
      sm: '500px'
    },

    extend: {},
  },
  
  plugins: [],
}

