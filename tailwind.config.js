module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }

        'xl': { 'max': '1280px' },
        // => @media (max-width: 1280px) { ... }

        'lg': { 'max': '1180px' },
        // => @media (max-width: 1180px) { ... }

        'md': { 'max': '834px' },
        // => @media (max-width: 834px) { ... }

        'sm': { 'max': '550px' },
        // => @media (max-width: 500px) { ... }
      },
      maxWidth: {
        'sm': '156px',
      },
      colors: {
        'npx__bg-gray': 'rgba(229, 231, 235, 1)'
      },
    },
  },
  plugins: [],
}
