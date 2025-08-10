import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[name]'
      }),
      Components({
        dirs: ['src/components'],
        extensions: ['vue'],
        deep: true,
      }),
      AutoImport({
        imports: [
          'vue', 'vue-router',
          {
            pinia: [
              'defineStore',
              'storeToRefs'
            ]
          },
        ],
        dirs: ['src/composables', 'src/stores', 'src/utils', 'src/components'],
        dts: 'src/auto-imports.d.ts',
        vueTemplate: true,

      }),
    ],
    base: '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'assets': path.resolve(__dirname, 'src/assets'),
        'images': path.resolve(__dirname, 'src/assets/images'),
        'icons': path.resolve(__dirname, 'src/assets/icons'),
        'components': path.resolve(__dirname, 'src/components'),
        'composables': path.resolve(__dirname, 'src/composables'),
        'utils': path.resolve(__dirname, 'src/utils'),
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
    },
  }
})
