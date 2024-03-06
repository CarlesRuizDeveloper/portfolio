import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      // Mapea el prefijo `@img` a la carpeta de imágenes
      '@img': '/src/assets/img'
    }
  }
});
