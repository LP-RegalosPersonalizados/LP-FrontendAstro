import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.regalospersonalizados-cznl.sarl',
  output: 'static',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        // Página principal → máxima prioridad
        if (item.url === 'https://www.regalospersonalizados-cznl.sarl/') {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        // Páginas de producto → prioridad alta
        if (item.url.includes('/producto/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        // Páginas de catálogo / empresas / trabajos → prioridad media
        return { ...item, priority: 0.6, changefreq: 'weekly' };
      },
    }),
  ],
});