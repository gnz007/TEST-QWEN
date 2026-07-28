/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        podium: ['"FSP DEMO - PODIUM Sharp 4.11"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-up-delay-1': 'fade-up 0.8s ease-out 0.2s forwards',
        'fade-up-delay-2': 'fade-up 0.8s ease-out 0.4s forwards',
        'fade-up-delay-3': 'fade-up 0.8s ease-out 0.6s forwards',
        'fade-up-delay-4': 'fade-up 0.8s ease-out 0.8s forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-in-delay': 'fade-in 0.8s ease-out 0.2s forwards',
        'scale-in': 'scale-in 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}

