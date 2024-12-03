/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Include the root HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS and JSX/TSX files in `src`
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        'primary-variant': '#212121',
        secondary: '#fff', // Example secondary color
        tertiary: '#10D29A',
        feature: '#000',
      },
      fontFamily: {
        parkinsans: ['ParkinSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
