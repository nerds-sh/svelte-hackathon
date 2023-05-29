/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0F1A2B',
                figmaGray: '#818EA4',
                figmaBlue: '#44A6F5',
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
    darkMode: 'class'
}

