/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				lexada: ['Lexend Exa Variable', 'sans-serif',]
			},
			maxWidth: {
				'lg' : '30rem'
			}
		},
	},
	plugins: [],
}


