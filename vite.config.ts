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
	darkMode: 'class',
	server: {
		port: 3000,
		open: true
	},
});
