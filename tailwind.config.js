/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }

        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }

        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }

        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        'Roboto': ['Roboto','system-ui']
      },
      colors: {
        'opaque-red': 'rgba(187, 32, 37, 0.1)',
        navbarBackground: 'rgba(255, 255, 255, 0.5)',
        primary: {
          text: "#8F161A",
          bg: "#BB2025",
          border: "#8F161A"
        },
        red: "#BB2025",
        heroBackgroundColor: "#BB2025",
        gradientColor: "linear-gradient(90deg, #BB2025 0%, rgba(255, 255, 255, 0.6) 100%);"
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/Children.png')",
      }
    },
  },
  plugins: [],
}
