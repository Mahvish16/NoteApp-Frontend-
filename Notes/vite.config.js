import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,   // force Vite to watch file changes
    },
    host: true,           // allow external connections (optional, but useful)
    port: 5173,           // you can change if needed
  },
})
