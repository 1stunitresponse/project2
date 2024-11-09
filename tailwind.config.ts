import type { Config } from 'tailwindcss';
import defaultTheme from "tailwindcss/defaultTheme";
import flowbitePlugin from "flowbite/plugin";

export default {
	content: ['./src/**/*.{html,js,svelte,ts}',"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
	darkMode: "selector",

	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", ...defaultTheme.fontFamily.sans],
			},

			colors: {

			primary: {

			"50": '#fff1f2',
			"100": '#ffe4e6',
       		"200": '#fecdd3',
       		"300": '#fda4af',
        	"400": '#fb7185',
        	"500": '#f43f5e',
        	"600": '#e11d48',
        	"700": '#be123c',
        	"800": '#9f1239',
        	"900": '#881337',
			"950": '#4c0519',

			}
			}
		}
	},

	plugins: [flowbitePlugin]
} satisfies Config;
