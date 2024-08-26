import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import 'process'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  },
  define: {
    'process.env': process.env
  }
})
