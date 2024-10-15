/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#393636",
        Secondary: "#9302ec",
      },
      borderRadius: {
        'custom-20': '20px',
        'custom-50': '50%',
      },
    },
  },
  plugins: [],
}



