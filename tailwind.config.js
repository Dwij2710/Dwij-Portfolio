/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#08090C',
        surface: '#0D111A',
        'surface-elevated': '#121724',
        'surface-glass': 'rgba(13, 17, 26, 0.65)',
        border: 'rgba(255, 255, 255, 0.08)',
        'border-light': 'rgba(255, 255, 255, 0.15)',
        'border-accent': 'rgba(0, 229, 199, 0.4)',
        primary: '#F8FAFC',
        secondary: '#94A3B8',
        muted: '#64748B',
        accent: {
          DEFAULT: '#00E5C7',
          hover: '#26EBD0',
          light: '#6EFAE8',
          dim: 'rgba(0, 229, 199, 0.15)',
          glow: 'rgba(0, 229, 199, 0.35)',
        },
        cyan: {
          glow: '#00E5C7',
          light: '#5EEAD4',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-accent-glow': 'radial-gradient(circle at 50% 30%, rgba(0, 229, 199, 0.12), transparent 70%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 9s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
