import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/AyeshaC123.github.io/',  // <== trailing slash is important
  plugins: [react()],
})
