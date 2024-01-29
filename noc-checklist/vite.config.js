import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'http://10.24.8.24:3000', // Replace with your backend server URL
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace('/api', ''),
      },
    }
  },
})
