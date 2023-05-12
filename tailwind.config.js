/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './template/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '580': '580px',
        '460': '460px',
        '340': '340px',
        '60px': '60px',
        '54px': '54px',
      },
      width: {
        '400': '400px',
        '360': '360px',
        '320': '320px',
        '60px': '60px',
        '54px': '54px',
      }
    },
    colors: {
      ...colors,
      primary: '',
      primary: "#EF233C",
      secondary: "#8D99AE",
    }
  },
  plugins: [],
}
