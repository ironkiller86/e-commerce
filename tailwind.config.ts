import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      gray: '#ededed',
      lightGray: '#F8F8F8',
      secondaryGray: '#4A4A4A',
      black: '#000000',
      red: '#e32118',
      white: '#fff',
      green: '#509C50',
    },
  },
  plugins: [],
};
export default config;
