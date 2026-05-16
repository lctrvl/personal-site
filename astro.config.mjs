import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// CHANGE THIS to your real site URL once you have a domain
export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
