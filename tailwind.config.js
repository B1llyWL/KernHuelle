export default {
  content: [
    "./index.html",
    "./html/**/*.html",
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
        // Для лого
        'nabla' :['Nabla', 'cursive'],
        
        // Для текста
       'kellyslab': ['Kelly Slab', 'sans-serif'],
      },
      colors: {
        //Light theme
        //header
        lightheader: 'oklch(67.3% 0.182 276.935)',
        //body
        lightbody: '#99beec',
    
        //Dark theme
        darkblue: 'oklch(45.7% 0.24 277.023)',
        darkviolet: 'oklch(30.2% 0.17 276.935)',
        //others
        footer: '#1E303B',
        cards: '#315BA9',
        lightyellow: '#f0cd07',
        lightgreen: '#00FF00',
        lightviolet: '#9b59b6',
      },
      boxShadow: {
        'customblue' : '#99beec'
      }
    },
  },
  plugins: [],
}


