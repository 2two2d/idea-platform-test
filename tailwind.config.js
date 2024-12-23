/** @type {import('tailwindcss').Config} */

const BG_COLOR = {
  white: '#FFFFFF',
}

const TEXT_COLOR = {
  primary: '#333333',
  secondary: '#707070',
  white: '#FFFFFF',
}

const BUTTON_COLOR = {
  primary: '#FA7A11',
}

const BORDER_COLOR = {
  secondary: "#707070"
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{css,scss}"
  ],
  theme: {
    extend: {
      colors: {
        bg: BG_COLOR,
        text: TEXT_COLOR,
        button: BUTTON_COLOR,
        border: BORDER_COLOR,
      }
    },
  },
  plugins: [],
}

