import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: ['dev3.wavelet.wolves.top'],
  },
  preview: {
    allowedHosts: ['dev3.wavelet.wolves.top'],
  },
})
