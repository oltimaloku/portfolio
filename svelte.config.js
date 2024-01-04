import adapter from '@sveltejs/adapter-static';

import { mdsvex } from 'mdsvex';
const isProduction = process.env.NODE_ENV === 'production';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    paths: {
      base: isProduction ? process.env.BASE_PATH : '',
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
