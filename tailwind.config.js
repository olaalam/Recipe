/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], 
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      'encode-sans': ['Encode Sans', 'sans-serif'], 
      'pacifico': ['Pacifico', 'cursive'],
    },
    extend: {
      colors: {
        primary: "#f29724",
        body: "#f4f2ee",
        secondary: "#21ba75",
      },
      fontSize: {
        h1: '3.75rem',
        h2: '3rem',
        h3: '2.25rem',
        h4: '1.875rem',
        h5: '1.5rem',
        h6: '1.25rem',
      },

    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1560px',
    },
  },
  plugins: [],
}