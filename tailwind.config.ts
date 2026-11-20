import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="ink"]'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        ink: 'var(--color-ink)',
        paper: 'var(--color-paper)',
        tint: 'var(--color-tint)',
        bg: 'var(--bg-main)',
        mainText: 'var(--text-main)',
        card: 'var(--card-bg)',
        muted: 'var(--muted-text)',
      },
      fontFamily: {
        display: ['Jost', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        hard: 'var(--shadow-hard)',
        sm: 'var(--shadow-sm)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
    },
  },
  plugins: [],
} satisfies Config
