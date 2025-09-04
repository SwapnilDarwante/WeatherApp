import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:process.env.VITE_BASE_URL || "/WeatherApp",
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist', // Default output directory
    assetsDir: 'assets', // Default assets directory
    sourcemap: false,
  }
  
})
