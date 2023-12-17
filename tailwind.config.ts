import type { Config } from 'tailwindcss';

function map(unit: string, length: number, step: number) {
  return Array.from({ length }, (_, index) => index + unit).filter((_, index) => index % step === 0).reduce((pre, cur) => ({ ...pre, [cur]: cur }), {})
}

const maxWidth = map('px', 2000, 2);
const maxHeight = map('px', 2000, 2);
const minWidth = map('px', 2000, 2);
const minHeight = map('px', 2000, 2);
const spacing = map('px', 2000, 2);
const borderRadius = map('px', 64, 2);


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'laptop': '1024px',
      'desktop': '1440px',
    },
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      maxWidth,
      maxHeight,
      minWidth,
      minHeight,
      spacing,
      borderRadius
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
    container: {
      padding: {
        DEFAULT: '16px',
        laptop: '64px',
        desktop: '128px'
      },
      center: true,
      screens: {
        'laptop': '1024px',
        'desktop': '1440px',
      },
    }
  },
  plugins: [require('@tailwindcss/forms'),
  ],
};
export default config;
