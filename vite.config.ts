import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg'
import flowBite from 'flowbite/plugin'

export default defineConfig({
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],
	plugins: [sveltekit(), svg(),  flowBite.plugin],
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {50:'#ebf5ff',100: '#fff1ee',200:'#ffe4de',300:'#ffd5cc',400:'#ffbcad',500:'#fe795d',600:'#ef562f',700:'#eb4f27',800:'#d3330a',900:'#d3330a'}

			},
		}
	},
	darkMode: 'class',
	server: {
		port: 3000,
		open: true
	},
});
