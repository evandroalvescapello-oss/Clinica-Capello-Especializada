import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5fbfa',
          100: '#d8f1ec',
          600: '#0e7a6d',
          700: '#0a5e54',
        },
      },
    },
  },
  plugins: [],
};

export default config;
