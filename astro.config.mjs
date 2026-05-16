import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alexsilvestre.com',
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});