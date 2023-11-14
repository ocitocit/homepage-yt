import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: 'rgb(var(--neu-200) / <alpha-value>)',
          hover: 'rgb(var(--neu-300) / <alpha-value>)',
          border: 'rgb(var(--neu-400) / <alpha-value>)',
          text: 'rgb(var(--neu-500) / <alpha-value>)',
          dark: 'rgb(var(--neu-800) / <alpha-value>)',
          accent1: 'rgb(var(--accent1)/<alpha-value>)',
          accent2: 'rgb(var(--accent2)/<alpha-value>)',
          ['dark-hover']: 'rgb(var(--neu-900) / <alpha-value>)'
        }
      }
    }
  },
  plugins: []
};
export default config;
