/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        charcoal: {
          950: '#0d0d0d',
          900: '#141414',
          800: '#1c1c1c',
          700: '#252525',
          600: '#2e2e2e',
          500: '#3a3a3a',
        },
        stone: {
          50: '#faf9f7',
          100: '#f4f1ec',
          200: '#e8e2d8',
          300: '#d5ccbc',
          400: '#bfb09a',
          500: '#a8957a',
          600: '#8f7a60',
          700: '#75624a',
          800: '#5e4e3b',
          900: '#4a3d2e',
        },
        gold: {
          50: '#fdf8ed',
          100: '#f9edcc',
          200: '#f2d88b',
          300: '#e8c04a',
          400: '#d4a827',
          500: '#b8891a',
          600: '#966b12',
          700: '#7a520e',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
