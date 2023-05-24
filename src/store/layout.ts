import { defineStore } from 'pinia'
interface ILayout {
  isCollapse: boolean
}
export default defineStore('layoutStore', {
  state: (): ILayout => {
    return {
      isCollapse: false,
    }
  },
  actions: {
    setCollapse(collapse: boolean) {
      this.isCollapse = collapse
    },
  },
})
