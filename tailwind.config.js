/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        // => @media (min-width: 576px) { ... }

        'sm': '576px',
        // => @media (min-width: 576px) { ... }

        'cart-screen': '985px',
        // => @media (min-width: 576px) { ... }

        "sm-md": "941px",
        // => @media (min-width: 941px) { ... }

        'md': '960px',
        // => @media (min-width: 960px) { ... }

        "custom": "966px",
        // => @media (min-width: 966px) { ... }

        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
}

