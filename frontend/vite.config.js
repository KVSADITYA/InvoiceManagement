import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/InvoiceManagement/', // 👈 important for GitHub Pages
  server: {
    port: 5173
  }
})
