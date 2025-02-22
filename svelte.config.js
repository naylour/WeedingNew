import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
        files: {

        },
        appDir: 'app',
        alias: {
            components: './src/components',
            sections: './src/sections',
            styles: './src/styles',
        },
        paths: {
            relative: true
        },
        output: {
            bundleStrategy: 'single',
            preloadStrategy: 'modulepreload'
        }
	}
};

export default config;
