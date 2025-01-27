import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  return {
  plugins: [
    vue(),
    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
    }),
    AutoImport({
      imports: [
        'vue',
      ],
      dirs: ['src/composables', 'src/stores'],
      dts: 'src/auto-imports.d.ts'
    }),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'components': path.resolve(__dirname, 'src/components'),
      'composables': path.resolve(__dirname, 'src/composables'),
    }
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: isProduction,
      },
      // ie8: true,
      module: true,
      sourceMap: !isProduction,
    }
  }
}
})
