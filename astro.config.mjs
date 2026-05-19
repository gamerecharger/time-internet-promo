import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://time-internet-promo.pages.dev',
  integrations: [sitemap()],
});
