/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        '2xl': {'min': '1535px'},
        // => @media (max-width: 1535px) { ... }

        'xl': {'min': '1279px'},
        // => @media (max-width: 1279px) { ... }

        'lg': {'min': '1023px'},
        // => @media (max-width: 1023px) { ... }

        'md': {'min': '767px'},
        // => @media (max-width: 767px) { ... }

        'sm': {'min': '639px'},
        // => @media (max-width: 639px) { ... }
      },
      fontFamily: {
        'Roboto': ['Roboto','system-ui'],
        'Montserrat': ['Montserrat', 'system-ui']
      },
      colors: {
        'opaque-red': 'rgba(187, 32, 37, 0.1)',
        navbarBackground: 'rgba(255, 255, 255, 0.5)',
        primary: {
          text: "#8F161A",
          bg: "#BB2025",
          border: "#8F161A",
          gridHoverBackground: "rgba(0, 0, 0, 0.4);"
        },
        red: "#BB2025",
        heroBackgroundColor: "#BB2025",
        gradientColor: "linear-gradient(90deg, #BB2025 0%, rgba(255, 255, 255, 0.6) 100%);",
        input: {
          border: '#DBDBDB',
          text: '#838383'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/Children.png')",
        'contact-form': "url('./assets/img/contact-form-bg.png')",
        'contact-data': "url('./assets/img/contact-data-bg.png')",
        'contact-page': "url('./assets/img/contact-page-bg.png')"
      },
      boxShadow: {
        counter: '0px 0px 6px rgba(0, 0, 0, 0.1)',
        card: '0px 0px 17px rgba(0, 0, 0, 0.1)',
        'contact-input': '0px 0px 5px 1px rgba(0, 0, 0, 0.1)',
        'see-also-card': '0px 0px 6px rgba(0, 0, 0, 0.25)',
        'contact-form': '0px 0px 19px rgba(0, 0, 0, 0.15)',
        'vacancy': '0px 0px 5px 1px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}
