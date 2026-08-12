import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain via public/CNAME — always served from root
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
})
