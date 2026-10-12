/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tao: {
          bg: '#0c0d1e',
          card: '#16182e',
          surface: '#20223f',
          accent: '#21b0a6',
          purple: '#27264a',
          lineRed: '#f23545',
          linePurple: '#a855f7',
          activeTab: '#323758'
        }
      }
    },
  },
  plugins: [],
}

