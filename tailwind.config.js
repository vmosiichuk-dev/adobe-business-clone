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
			adobe: "#fafafa",
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
			   	'body': "url('img/grid-bg.jpg')",
				'trends': "url('img/trends-bg.avif')",
				'trends--md': "url('img/trends-bg--600.avif')",
				'trends--xl': "url('img/trends-bg--900.avif')",
			},
			spacing: {
				'2.7': '.688rem',
				'.75': '.188rem',
				'3.3': '.813rem',
				'3.7': '.938rem',
				'8.':  '2.063rem',
				'12.': '3.063rem',
				'18':  '4.5rem',
				'20.': '5.063rem',
				'24.': '6.063rem',
			},
			fontSize: {
				'xxs': '.625rem',
				  's': '.813rem',
				  'm': ['.969rem', '1.688rem'],
				 'ml': '1.063rem',
				 'lg': ['1.125rem', '1.375'],
				'2xl': ['1.5rem', '2.188rem'],
				'3.5xl': ['2rem', '2.75rem'],
			},
			lineHeight: {
				'6.5': '1.688rem',
			},
			screens: {
				'md': '600px',
				'mmd': { 'raw': '(max-width: 600px)' },
				'lg': '900px',
				'mlg': { 'raw': '(max-width: 900px)' },
				'xl': '1230px',
				'mxl': { 'raw': '(max-width: 1230px)' },
				'2xl': '1366px',
				'm2xl': { 'raw': '(max-width: 1366px)' },
			},
		},
	},
	plugins: [],
}
