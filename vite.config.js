import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // ✅ FIXED: No '/AyeshaC123.github.io/', just root
  plugins: [react()],
})
