const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      stone: colors.stone,
      sky: colors.sky,
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      neutral: colors.neutral,
      adobe: "#fbfbfb",
      adobered: {
        light: "#f00f00",
        dark: "#b40e04",
      },
    },
    fontFamily: {
      'mono': ['"Space Mono"', 'monospace'],
      'noto': ['"Noto Sans KR"', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'body': "url('../public/img/grid-bg1.jpg')",
       },
    },
  },
  plugins: [],
}
