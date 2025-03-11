/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            a: {
              color: '#10B981',
              '&:hover': {
                color: '#fff',
              },
            },
            h1: {
              color: '#10B981',
            },
            h2: {
              color: '#10B981',
            },
            h3: {
              color: '#10B981',
            },
            h4: {
              color: '#10B981',
            },
            strong: {
              color: '#10B981',
            },
            code: {
              color: '#10B981',
            },
            blockquote: {
              borderLeftColor: '#10B981',
              color: '#9CA3AF',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};