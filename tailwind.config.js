/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#FFFFFF',
        accent: '#333333',
        'gray-light': '#F5F5F5',
        'gray-medium': '#CCCCCC',
        'gray-dark': '#666666',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'heading-1': '3.5rem',
        'heading-2': '2.5rem',
        'heading-3': '1.75rem',
        'heading-4': '1.25rem',
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'hover': '0 10px 30px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.7s ease-in-out',
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