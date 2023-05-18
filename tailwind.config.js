/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      titillium: ['TitilliumWeb-Regular'],
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {
      lineHeight: {
        '13.5': '3.375rem',
        '7.5': '1.875rem',
      },
      spacing: {
        15: '3.75rem',
        18: '4.5rem',
        '19.5': '4.875rem',
        '28.5': '7.125rem',
        33: '8.25rem',
        39: '9.75rem',
        '61.5': '15.375rem',
        '87.5': '21.875rem',
        596: '37.25rem',
        'max-content-width': '70vw',
      },
      colors: {
        'color-white-10': 'rgba(255, 255, 255, 0.1)',
        'title-range-start': 'rgba(90, 204, 143, 1)',
        'title-range-end': 'rgba(81, 224, 205, 1)',
        'subtitle-range-start': 'rgba(255, 255, 255, 0.96)',
        'subtitle-range-end': 'rgba(255, 255, 255, 0.38)',
        'card-range-start': 'rgba(255, 255, 255, 0.384)',
        'card-range-end': 'rgba(255, 255, 255, 0.96)',
      },
      animation: {
        breathing: 'breathing 4s ease-in-out infinite',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      }
    },
  },
  plugins: [],
};
