import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false // css in js
        })
      ]
    })
  ],
    test: {
    globals: true,
    environment: 'jsdom',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul', // or 'v8'
      reporter: ['text', 'json', 'html'],
    },
  },
  server: {
    proxy: {
      '/api/': {
        target: 'http://shengxinjing.cn:7001/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
