/** @type {import('tailwindcss').Config} */

const BG_COLOR = {
  white: '#FFFFFF',
  paleBlue: '#EFF4FF'
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
  secondary: "#707070",
  softBlue: '#C2D2F4'
}
const ACCENT_COLOR = {
  blue: '#098EED',
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
        accent: ACCENT_COLOR
      }
    },
  },
  plugins: [],
}

