import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import Components from 'unplugin-vue-components/vite'
// 组件按需加载
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// 自动导入组合api
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    Components({ resolvers: [AntDesignVueResolver()] }),
    AutoImport({
      // https://github.com/antfu/unplugin-auto-import
      dts: true,
      imports: ['vue', 'vue-router'],
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer(), tailwindcss()],
    },
  },
})
