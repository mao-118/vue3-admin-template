import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/antDesign'
import './styles/index.scss'
import DirectivePlugins from '@/directives'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import * as antIcons from '@ant-design/icons-vue'
const app = createApp(App)
// const icons: any = antIcons
// // 注册图标
// Object.keys(icons).forEach((key: string) => {
//   app.component(key, icons[key])
// })
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) //持久化插件
app.use(DirectivePlugins).use(pinia).use(router).mount('#app')
