// vite.config.ts
import { resolve } from "path";
import vue from "file:///E:/vue3-admin-template/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import autoprefixer from "file:///E:/vue3-admin-template/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwindcss from "file:///E:/vue3-admin-template/node_modules/tailwindcss/lib/index.js";
import Components from "file:///E:/vue3-admin-template/node_modules/unplugin-vue-components/dist/vite.mjs";
import compressPlugin from "file:///E:/vue3-admin-template/node_modules/vite-plugin-compression/dist/index.mjs";
import { ElementPlusResolver } from "file:///E:/vue3-admin-template/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import AutoImport from "file:///E:/vue3-admin-template/node_modules/unplugin-auto-import/dist/vite.js";
import { visualizer } from "file:///E:/vue3-admin-template/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { createSvgIconsPlugin } from "file:///E:/vue3-admin-template/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { viteMockServe } from "file:///E:/vue3-admin-template/node_modules/vite-plugin-mock/dist/index.js";
var __vite_injected_original_dirname = "E:\\vue3-admin-template";
var vite_config_default = ({ command }) => {
  return {
    root: "./",
    base: "./",
    envDir: "./env",
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "./src")
      }
    },
    plugins: [
      vue(),
      viteMockServe({
        localEnabled: command === "serve"
      }),
      Components({ resolvers: [ElementPlusResolver()] }),
      AutoImport({
        // https://github.com/antfu/unplugin-auto-import
        dts: true,
        imports: ["vue", "vue-router"],
        eslintrc: {
          enabled: true
        }
      }),
      compressPlugin({
        // gzip静态资源压缩
        verbose: true,
        // 默认即可
        disable: false,
        // 开启压缩(不禁用)，默认即可
        deleteOriginFile: false,
        // 删除源文件
        threshold: 10240,
        // 压缩前最小文件大小 10K
        algorithm: "gzip",
        // 压缩算法
        ext: ".gz"
        // 文件类型
      }),
      visualizer({
        //包大小分析
        open: false
      }),
      createSvgIconsPlugin({
        //svg图标,可以配合阿里iconfont库使用
        // Specify the icon folder to be cached
        iconDirs: [resolve(process.cwd(), "src/assets/icons")],
        // Specify symbolId format
        symbolId: "icon-[dir]-[name]"
      })
    ],
    css: {
      postcss: {
        plugins: [autoprefixer(), tailwindcss()]
      }
    },
    build: {
      minify: "terser",
      cssCodeSplit: true,
      // 如果设置为false，整个项目中的所有 CSS 将被提取到一个 CSS 文件中
      chunkSizeWarningLimit: 2e3,
      // 大文件报警阈值设置
      sourcemap: false,
      // 不生产sourcemap
      assetsInlineLimit: 5e3,
      // 小于该值 图片将打包成Base64
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          }
        }
      },
      /** 清除console和debugger */
      terserOptions: {
        compress: {
          drop_console: false,
          // 不清除console
          drop_debugger: true
        }
      }
    }
  };
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx2dWUzLWFkbWluLXRlbXBsYXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFx2dWUzLWFkbWluLXRlbXBsYXRlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi92dWUzLWFkbWluLXRlbXBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBVc2VyQ29uZmlnRXhwb3J0LCBDb25maWdFbnYgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcydcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG4vLyBnemlwXHU1MzhCXHU3RjI5XG5pbXBvcnQgY29tcHJlc3NQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nXG4vLyBcdTdFQzRcdTRFRjZcdTYzMDlcdTk3MDBcdTUyQTBcdThGN0RcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXG4vLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTdFQzRcdTU0MDhhcGlcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG4vLyBcdTRFRTNcdTc4MDFcdTUyMDZcdTY3OTBcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tICdyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXInXG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uc1BsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN2Zy1pY29ucydcbmltcG9ydCB7IHZpdGVNb2NrU2VydmUgfSBmcm9tICd2aXRlLXBsdWdpbi1tb2NrJyAvL21vY2tcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCAoeyBjb21tYW5kIH06IENvbmZpZ0Vudik6IFVzZXJDb25maWdFeHBvcnQgPT4ge1xuICByZXR1cm4ge1xuICAgIHJvb3Q6ICcuLycsXG4gICAgYmFzZTogJy4vJyxcbiAgICBlbnZEaXI6ICcuL2VudicsXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICB2aXRlTW9ja1NlcnZlKHtcbiAgICAgICAgbG9jYWxFbmFibGVkOiBjb21tYW5kID09PSAnc2VydmUnLFxuICAgICAgfSksXG4gICAgICBDb21wb25lbnRzKHsgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSB9KSxcbiAgICAgIEF1dG9JbXBvcnQoe1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcbiAgICAgICAgZHRzOiB0cnVlLFxuICAgICAgICBpbXBvcnRzOiBbJ3Z1ZScsICd2dWUtcm91dGVyJ10sXG4gICAgICAgIGVzbGludHJjOiB7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgY29tcHJlc3NQbHVnaW4oe1xuICAgICAgICAvLyBnemlwXHU5NzU5XHU2MDAxXHU4RDQ0XHU2RTkwXHU1MzhCXHU3RjI5XG4gICAgICAgIHZlcmJvc2U6IHRydWUsIC8vIFx1OUVEOFx1OEJBNFx1NTM3M1x1NTNFRlxuICAgICAgICBkaXNhYmxlOiBmYWxzZSwgLy8gXHU1RjAwXHU1NDJGXHU1MzhCXHU3RjI5KFx1NEUwRFx1Nzk4MVx1NzUyOClcdUZGMENcdTlFRDhcdThCQTRcdTUzNzNcdTUzRUZcbiAgICAgICAgZGVsZXRlT3JpZ2luRmlsZTogZmFsc2UsIC8vIFx1NTIyMFx1OTY2NFx1NkU5MFx1NjU4N1x1NEVGNlxuICAgICAgICB0aHJlc2hvbGQ6IDEwMjQwLCAvLyBcdTUzOEJcdTdGMjlcdTUyNERcdTY3MDBcdTVDMEZcdTY1ODdcdTRFRjZcdTU5MjdcdTVDMEYgMTBLXG4gICAgICAgIGFsZ29yaXRobTogJ2d6aXAnLCAvLyBcdTUzOEJcdTdGMjlcdTdCOTdcdTZDRDVcbiAgICAgICAgZXh0OiAnLmd6JywgLy8gXHU2NTg3XHU0RUY2XHU3QzdCXHU1NzhCXG4gICAgICB9KSxcbiAgICAgIHZpc3VhbGl6ZXIoe1xuICAgICAgICAvL1x1NTMwNVx1NTkyN1x1NUMwRlx1NTIwNlx1Njc5MFxuICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgIH0pLFxuICAgICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgICAvL3N2Z1x1NTZGRVx1NjgwNyxcdTUzRUZcdTRFRTVcdTkxNERcdTU0MDhcdTk2M0ZcdTkxQ0NpY29uZm9udFx1NUU5M1x1NEY3Rlx1NzUyOFxuICAgICAgICAvLyBTcGVjaWZ5IHRoZSBpY29uIGZvbGRlciB0byBiZSBjYWNoZWRcbiAgICAgICAgaWNvbkRpcnM6IFtyZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvYXNzZXRzL2ljb25zJyldLFxuICAgICAgICAvLyBTcGVjaWZ5IHN5bWJvbElkIGZvcm1hdFxuICAgICAgICBzeW1ib2xJZDogJ2ljb24tW2Rpcl0tW25hbWVdJyxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgY3NzOiB7XG4gICAgICBwb3N0Y3NzOiB7XG4gICAgICAgIHBsdWdpbnM6IFthdXRvcHJlZml4ZXIoKSwgdGFpbHdpbmRjc3MoKV0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgICBjc3NDb2RlU3BsaXQ6IHRydWUsIC8vIFx1NTk4Mlx1Njc5Q1x1OEJCRVx1N0Y2RVx1NEUzQWZhbHNlXHVGRjBDXHU2NTc0XHU0RTJBXHU5ODc5XHU3NkVFXHU0RTJEXHU3Njg0XHU2MjQwXHU2NzA5IENTUyBcdTVDMDZcdTg4QUJcdTYzRDBcdTUzRDZcdTUyMzBcdTRFMDBcdTRFMkEgQ1NTIFx1NjU4N1x1NEVGNlx1NEUyRFxuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAyMDAwLCAvLyBcdTU5MjdcdTY1ODdcdTRFRjZcdTYyQTVcdThCNjZcdTk2MDhcdTUwM0NcdThCQkVcdTdGNkVcbiAgICAgIHNvdXJjZW1hcDogZmFsc2UsIC8vIFx1NEUwRFx1NzUxRlx1NEVBN3NvdXJjZW1hcFxuICAgICAgYXNzZXRzSW5saW5lTGltaXQ6IDUwMDAsIC8vIFx1NUMwRlx1NEU4RVx1OEJFNVx1NTAzQyBcdTU2RkVcdTcyNDdcdTVDMDZcdTYyNTNcdTUzMDVcdTYyMTBCYXNlNjRcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdzdGF0aWMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdzdGF0aWMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdzdGF0aWMvW2V4dF0vW25hbWVdLVtoYXNoXS5bZXh0XScsXG4gICAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgICAvLyBcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTUyMDZcdTYyQzZcdTYyNTNcdTUzMDVcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlkLnRvU3RyaW5nKCkuc3BsaXQoJ25vZGVfbW9kdWxlcy8nKVsxXS5zcGxpdCgnLycpWzBdLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIC8qKiBcdTZFMDVcdTk2NjRjb25zb2xlXHU1NDhDZGVidWdnZXIgKi9cbiAgICAgIHRlcnNlck9wdGlvbnM6IHtcbiAgICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgICBkcm9wX2NvbnNvbGU6IGZhbHNlLCAvLyBcdTRFMERcdTZFMDVcdTk2NjRjb25zb2xlXG4gICAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3UCxTQUFTLGVBQWU7QUFFaFIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sZ0JBQWdCO0FBRXZCLE9BQU8sb0JBQW9CO0FBRTNCLFNBQVMsMkJBQTJCO0FBRXBDLE9BQU8sZ0JBQWdCO0FBRXZCLFNBQVMsa0JBQWtCO0FBQzNCLFNBQVMsNEJBQTRCO0FBQ3JDLFNBQVMscUJBQXFCO0FBZjlCLElBQU0sbUNBQW1DO0FBaUJ6QyxJQUFPLHNCQUFRLENBQUMsRUFBRSxRQUFRLE1BQW1DO0FBQzNELFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDakM7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixjQUFjO0FBQUEsUUFDWixjQUFjLFlBQVk7QUFBQSxNQUM1QixDQUFDO0FBQUEsTUFDRCxXQUFXLEVBQUUsV0FBVyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQztBQUFBLE1BQ2pELFdBQVc7QUFBQTtBQUFBLFFBRVQsS0FBSztBQUFBLFFBQ0wsU0FBUyxDQUFDLE9BQU8sWUFBWTtBQUFBLFFBQzdCLFVBQVU7QUFBQSxVQUNSLFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFDRCxlQUFlO0FBQUE7QUFBQSxRQUViLFNBQVM7QUFBQTtBQUFBLFFBQ1QsU0FBUztBQUFBO0FBQUEsUUFDVCxrQkFBa0I7QUFBQTtBQUFBLFFBQ2xCLFdBQVc7QUFBQTtBQUFBLFFBQ1gsV0FBVztBQUFBO0FBQUEsUUFDWCxLQUFLO0FBQUE7QUFBQSxNQUNQLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQTtBQUFBLFFBRVQsTUFBTTtBQUFBLE1BQ1IsQ0FBQztBQUFBLE1BQ0QscUJBQXFCO0FBQUE7QUFBQTtBQUFBLFFBR25CLFVBQVUsQ0FBQyxRQUFRLFFBQVEsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0FBQUE7QUFBQSxRQUVyRCxVQUFVO0FBQUEsTUFDWixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLFFBQ1AsU0FBUyxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7QUFBQSxNQUN6QztBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLGNBQWM7QUFBQTtBQUFBLE1BQ2QsdUJBQXVCO0FBQUE7QUFBQSxNQUN2QixXQUFXO0FBQUE7QUFBQSxNQUNYLG1CQUFtQjtBQUFBO0FBQUEsTUFDbkIsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFVBQ04sZ0JBQWdCO0FBQUEsVUFDaEIsZ0JBQWdCO0FBQUEsVUFDaEIsZ0JBQWdCO0FBQUEsVUFDaEIsYUFBYSxJQUFJO0FBRWYsZ0JBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixxQkFBTyxHQUFHLFNBQVMsRUFBRSxNQUFNLGVBQWUsRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLFNBQVM7QUFBQSxZQUN4RTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFFQSxlQUFlO0FBQUEsUUFDYixVQUFVO0FBQUEsVUFDUixjQUFjO0FBQUE7QUFBQSxVQUNkLGVBQWU7QUFBQSxRQUNqQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
