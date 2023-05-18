/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      titillium: ['TitilliumWeb-Regular'],
    },
    extend: {
      spacing: {
        15: '3.75rem',
        18: '4.5rem',
        39: '9.75rem',
      },
      colors: {
        'color-white-10': 'rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
};
