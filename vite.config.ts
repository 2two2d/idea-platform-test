import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

import postcss from './postcss.config'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      cache: false,
      emitWarning: false,
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      exclude: ['/virtual:/**', 'node_modules/**']
    }),
    tsconfigPaths()
  ],
  css: {
    postcss,
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  worker: {
    plugins: () => [tsconfigPaths()]
  }
})

