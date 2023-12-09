/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'header' : '#212428de',
				'nav': '#c4cfde',
				'body' : '#212428',
				'titleName' : '#ff4a3b',
				'separador' : '#212428',
				

			},
			boxShadow:{
				shadowimg: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
				shadowcard: '10px 10px 19px #46494e, -10px -10px 19px #323233',
			},
			
		},
	},
	plugins: [],
}
