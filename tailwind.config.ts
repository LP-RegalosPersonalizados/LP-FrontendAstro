import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#124734',
          light: '#1a6349',
          dark: '#0c3124',
        },
        secondary: {
          DEFAULT: '#DEE2B1',
          light: '#edf0d0',
          dark: '#c8cc8a',
        },
        accent: {
          DEFAULT: '#DA9928',
          light: '#e8b34f',
          dark: '#b87e18',
        },
        'neutral-light': '#DAD9D7',
        business: {
          DEFAULT: '#0d3f2a',
          light: '#1a5c40',
        },
        energy: {
          DEFAULT: '#99D98E',
          light: '#a8e599',
          dark: '#6ab563',
        },
        information: {
          DEFAULT: '#4B7BA7',
          light: '#6496c0',
        },
        trust: {
          DEFAULT: '#6B7280',
          light: '#9CA3AF',
        },
        success: {
          DEFAULT: '#10B981',
          light: '#34D399',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(18, 71, 52, 0.08)',
        'card-hover': '0 12px 40px rgba(18, 71, 52, 0.16)',
      },
      backgroundImage: {
        'texture': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23124734' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
} satisfies Config;
