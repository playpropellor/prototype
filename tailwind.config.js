/** @type {import('tailwindcss').Config} */

const { colors, fontSize, spacing } = require('./tailwind.config.json')

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors,
    fontSize,
    spacing,
    extend: {},
  },
  plugins: [],
}
