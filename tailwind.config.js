/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#ff0051',
        'secondary': '#00ff8c',
        'accent': '#8800ff',
        
        'dark': {
          '100': '#1a1a1a',
          '200': '#141414',
          '300': '#0f0f0f',
          '400': '#0a0a0a',
          '500': '#050505',
          'DEFAULT': '#000000',
        },
        
        'hot-pink': {
          '100': '#ff99b3',
          '200': '#ff6694',
          '300': '#ff3375',
          '400': '#ff0051',
          '500': '#cc003f',
          'DEFAULT': '#ff0051',
        },
        
        'neon-green': {
          '100': '#b3ffda',
          '200': '#66ffb5',
          '300': '#1aff91',
          '400': '#00ff8c',
          '500': '#00cc70',
          'DEFAULT': '#00ff8c',
        },
      },
      fontFamily: {
        'mono': ['Space Mono', 'Consolas', 'monospace'],
        'display': ['Teko', 'Impact', 'sans-serif'],
        'body': ['Roboto Mono', 'monospace'],
      },
      letterSpacing: {
        'widest': '.25em',
        'wider': '.15em',
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(5px, 5px)' },
          '66%': { transform: 'translate(-5px, -5px)' },
        },
      },
      boxShadow: {
        'neon-pink': '0 0 5px #ff0051, 0 0 10px #ff0051, 0 0 15px #ff0051',
        'neon-green': '0 0 5px #00ff8c, 0 0 10px #00ff8c, 0 0 15px #00ff8c',
      },
    },
  },
  plugins: [],
}