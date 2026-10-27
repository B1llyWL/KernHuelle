export default {
  content: [
    "./*.html",         
    "./public/**/*.html", 
    "./js/**/*.js",      
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  darkMode: 'class',
  theme: {
    container: {
      padding: '20px',
      center: true
    },
    extend: {
      fontFamily: {
        'nabla': ['Nabla', 'cursive'],
        'kellyslab': ['Kelly Slab', 'sans-serif'],
      },
      colors: {
        lightheader: 'oklch(67.3% 0.182 276.935)',
        lightbody: '#99beec',
        darkblue: 'oklch(45.7% 0.24 277.023)',
        darkviolet: 'oklch(30.2% 0.17 276.935)',
        footer: '#1E303B',
        cards: '#315BA9',
        lightyellow: '#f0cd07',
        lightgreen: '#00FF00',
        lightviolet: '#9b59b6',
      },
      boxShadow: {
        'customblue': '#99beec'
      }
    },
  },
  plugins: [],
}
