import { resolve } from 'path'
import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import Components from 'unplugin-vue-components/vite'
// gzip压缩
import compressPlugin from 'vite-plugin-compression'
// 组件按需加载
import { AntDesignVueResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 自动导入组合api
import AutoImport from 'unplugin-auto-import/vite'
// 代码分析
import { visualizer } from 'rollup-plugin-visualizer'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock' //mock
// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    root: './',
    base: './',
    envDir: './env',
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    plugins: [
      vue(),
      viteMockServe({
        localEnabled: command === 'serve',
      }),
      Components({ resolvers: [AntDesignVueResolver(), ElementPlusResolver()] }),
      AutoImport({
        // https://github.com/antfu/unplugin-auto-import
        dts: true,
        imports: ['vue', 'vue-router'],
        eslintrc: {
          enabled: true,
        },
      }),
      compressPlugin({
        // gzip静态资源压缩
        verbose: true, // 默认即可
        disable: false, // 开启压缩(不禁用)，默认即可
        deleteOriginFile: false, // 删除源文件
        threshold: 10240, // 压缩前最小文件大小 10K
        algorithm: 'gzip', // 压缩算法
        ext: '.gz', // 文件类型
      }),
      visualizer({
        //包大小分析
        open: false,
      }),
      createSvgIconsPlugin({
        //svg图标,可以配合阿里iconfont库使用
        // Specify the icon folder to be cached
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    css: {
      postcss: {
        plugins: [autoprefixer(), tailwindcss()],
      },
    },
    build: {
      minify: 'terser',
      cssCodeSplit: true, // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      chunkSizeWarningLimit: 2000, // 大文件报警阈值设置
      sourcemap: false, // 不生产sourcemap
      assetsInlineLimit: 5000, // 小于该值 图片将打包成Base64
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            // 静态资源分拆打包
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          },
        },
      },
      /** 清除console和debugger */
      terserOptions: {
        compress: {
          drop_console: false, // 不清除console
          drop_debugger: true,
        },
      },
    },
  }
}
