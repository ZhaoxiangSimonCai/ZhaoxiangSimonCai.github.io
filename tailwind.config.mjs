/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-2': 'rgb(var(--accent-2) / <alpha-value>)',
      },
      fontFamily: {
        display: [
          '"Fraunces Variable"',
          'Georgia',
          '"Source Han Serif SC"',
          '"Songti SC"',
          '"SimSun"',
          'serif',
        ],
        sans: [
          '"Inter Variable"',
          'ui-sans-serif',
          'system-ui',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          '"Source Han Sans SC"',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
        content: '1180px',
      },
      fontSize: {
        hero: ['clamp(2.5rem, 5vw, 4.25rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
    },
  },
};
