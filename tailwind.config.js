/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottom-only': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      width: {
        '126':'50rem',
        '128': '52rem', // 32rem is 512px
        '144': '36rem', // 36rem is 576px
        // Add more custom heights as needed
      },
       margin:{
        '-mt-96':'-38rem',
       },
    },
  },
  plugins: [],
}

