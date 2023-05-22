import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/antDesign'
import './styles/index.scss'
import DirectivePlugins from '@/directives'
import 'virtual:svg-icons-register' //svg
// import * as antIcons from '@ant-design/icons-vue'
const app = createApp(App)
// const icons: any = antIcons
// // 注册图标
// Object.keys(icons).forEach((key: string) => {
//   app.component(key, icons[key])
// })
app.use(DirectivePlugins).use(router).mount('#app')
