import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0032a0',
          dark: '#002170',
        },
        secondary: {
          DEFAULT: '#003d82',
        },
        accent: {
          DEFAULT: '#f77f00',
        },
        success: {
          DEFAULT: '#06a77d',
        },
        danger: {
          DEFAULT: '#d62828',
        },
        info: {
          DEFAULT: '#0077be',
        },
        'bg-alt': '#f8f9fa',
        'site-bg': '#f8f9fa',
        'site-text': {
          DEFAULT: '#1a1a1a',
          light: '#666666',
        },
      },
      maxWidth: {
        site: '1360px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
        md: '0 4px 8px rgba(0, 0, 0, 0.1)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
