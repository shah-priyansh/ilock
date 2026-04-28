import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['f1520c48cd03.ngrok-free.app',"577a-2409-40c1-10dc-a2ba-e008-589b-88d3-ddf1.ngrok-free.app","90f8-2409-40c1-10dc-c80f-cbc-f9b3-63a6-ecfb.ngrok-free.app"],
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
