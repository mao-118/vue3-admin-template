import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import DirectivePlugins from '@/directives'
import 'virtual:svg-icons-register' //svg
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { pinia } from '@/store'
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(DirectivePlugins).use(pinia).use(router).mount('#app')
