import adapter from '@sveltejs/adapter-static';

import { mdsvex } from 'mdsvex';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === 'production' ? process.env.BASE_PATH : '',
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
