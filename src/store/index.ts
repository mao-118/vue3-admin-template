import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'
import useUserStore from './user'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) //持久化插件 在router里面使用store这个插件无效
export { useUserStore, pinia }
