import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://zhaoxiangsimoncai.github.io',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap(),
    icon({
      include: {
        lucide: ['*'],
        'simple-icons': [
          'googlescholar',
          'github',
          'linkedin',
          'x',
          'orcid',
          'python',
          'r',
          'linux',
          'pytorch',
        ],
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
