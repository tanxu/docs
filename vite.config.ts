import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 项目站部署在 /docs/ 子路径下
export default defineConfig({
  base: '/docs/',
  plugins: [react()],
})
