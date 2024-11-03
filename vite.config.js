import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:5173,
    host:'0.0.0.0'
  },
  build: {
    outDir: 'dist',       // Output directory for the production build
    // sourcemap: false,     // Disable sourcemaps in production for better performance
    minify: 'esbuild',   
     // Use 'esbuild' (default) or 'terser' for minification
     base:'/portfolio2/'
  },
})
