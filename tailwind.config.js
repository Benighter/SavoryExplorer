/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f8fc',
          100: '#eef0f7',
          200: '#d5d9ec',
          300: '#bbc2e0',
          400: '#8895c9',
          500: '#5468b2',
          600: '#4c5ea0',
          700: '#3f4e86',
          800: '#323e6b',
          900: '#293258',
        },
        accent: {
          50: '#fff8ed',
          100: '#fff0db',
          200: '#ffdba6',
          300: '#ffc872',
          400: '#ffb43d',
          500: '#ffa108',
          600: '#e68107',
          700: '#c06205',
          800: '#9a4f09',
          900: '#7e420c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 