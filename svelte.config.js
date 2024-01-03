import adapter from '@sveltejs/adapter-auto';

import { mdsvex } from 'mdsvex';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
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
