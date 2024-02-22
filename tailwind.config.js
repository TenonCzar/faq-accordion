/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        'White': 'hsl(0, 0%, 100%)',
'Lightpink': 'hsl(275, 100%, 97%)',
'Grayishpurple': 'hsl(292, 16%, 49%)',
'Darkpurple': 'hsl(292, 42%, 14%)',
      },
      fontFamily: {
        "work-sans": ["Work Sans", 'sans-serif']
      },
      backgroundImage: {
        'mobile': "url('/images/background-pattern-mobile.svg')",
        'desktop': "url('/images/background-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
}

