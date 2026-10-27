import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  plugins: [], 
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        catalog: 'catalog.html',
        vacancy: 'vacancy.html'
      }
    }
  }
})
