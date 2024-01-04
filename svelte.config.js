import adapter from '@sveltejs/adapter-static';

import { mdsvex } from 'mdsvex';
const dev = process.argv.includes('dev');
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : process.env.BASE_PATH,
    }
  },
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [
    mdsvex({
      extensions: ['.md', 'svx']
    }),
   // vitePreprocess(),
  ]
};
export default config;
