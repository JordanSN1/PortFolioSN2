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
        Tertiary: "#f59e0b",
      },
      borderRadius: {
        'custom-20': '20px',
        'custom-50': '50%',
      },
      boxShadow: {
        'custom': '4px 4px 8px #9302ec ',
      },
    },
  },
  plugins: [],
}



