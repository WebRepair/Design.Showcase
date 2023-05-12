/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'six' : "url('/src/data/showcase/images/six.JPG')",
				'six2' : "url('/src/data/showcase/images/six2.JPG')",
			}
		},
	},
	plugins: [],
}