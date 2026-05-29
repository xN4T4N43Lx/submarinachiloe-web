/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Eliminate ALL yellow/amber variants completely
        yellow: {
          50: '#ffffff', 100: '#ffffff', 200: '#ffffff', 300: '#ffffff',
          400: '#ffffff', 500: '#ffffff', 600: '#ffffff', 700: '#ffffff',
          800: '#ffffff', 900: '#ffffff', 950: '#ffffff',
          DEFAULT: '#ffffff'
        },
        amber: {
          50: '#ffffff', 100: '#ffffff', 200: '#ffffff', 300: '#ffffff',
          400: '#ffffff', 500: '#ffffff', 600: '#ffffff', 700: '#ffffff',
          800: '#ffffff', 900: '#ffffff', 950: '#ffffff',
          DEFAULT: '#ffffff'
        },
        lime: {
          50: '#ffffff', 100: '#ffffff', 200: '#ffffff', 300: '#ffffff',
          400: '#ffffff', 500: '#ffffff', 600: '#ffffff', 700: '#ffffff',
          800: '#ffffff', 900: '#ffffff', 950: '#ffffff',
          DEFAULT: '#ffffff'
        },
        // Submarina Chiloé brand colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1a5fa8', // Main brand blue
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
}