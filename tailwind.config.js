/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '24px',
      center: true,
      screens: {
        '2xl': '1440px'
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      animation: {
        zoomIn: 'scale .2s cubic-bezier(0, 0, 0.2, 1)'
      },
      keyframes: {
        scale: {
          from: { transform: 'scale(0)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 }
        }
      }
    }
  },
  plugins: []
}
