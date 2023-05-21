import imgLazy from './img-lazy'
import type { App } from 'vue'
export default {
  install(app: App) {
    app.directive('img-lazy', imgLazy)
  },
}
