import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://LuisUrrutiaT.github.io',
})
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://LuisUrrutia.io',
  base: '/my-repo',
})
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import siteConfig from './src/data/site-config';

// https://astro.build/config
export default defineConfig({
    site: siteConfig.website,
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap()]
});
