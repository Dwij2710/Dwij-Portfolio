/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: 'rgb(var(--color-base) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        panel2: 'rgb(var(--color-panel2) / <alpha-value>)',
        hairline: 'rgb(var(--color-hairline) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        faint: 'rgb(var(--color-faint) / <alpha-value>)',
        signal: 'rgb(var(--color-signal) / <alpha-value>)',
        data: 'rgb(var(--color-data) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
        content: '880px',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 16s linear infinite',
        'sound-wave': 'soundwave 1.2s ease-in-out infinite alternate',
      },
      keyframes: {
        soundwave: {
          '0%': { height: '4px' },
          '100%': { height: '18px' },
        },
      },
    },
  },
  plugins: [],
}
