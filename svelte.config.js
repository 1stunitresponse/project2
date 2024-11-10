import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({ pages: "build", assets: "build", fallback: undefined, precompress: false, strict: true }),

		paths: {
			base: '/project2', // Replace 'your-repo' with your GitHub repository name
		  },

		  prerender: {
			handleHttpError: ({ status, path, referrer, referenceType }) => {
			  if (status === 404 && referenceType === 'asset') return 'ignore';
			},
		  },
		}

		
};

export default config;
