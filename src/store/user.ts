import { defineStore } from 'pinia'
interface IUser {
  username: string
  token: string
}
export default defineStore('userStore', {
  state: () => {
    return {
      userInfo: JSON.parse(localStorage.getItem('userInfo') as string) || { username: '', token: '' },
    }
  },
  persist: true,
  actions: {
    setUserInfo(info: IUser) {
      this.userInfo = info
      localStorage.setItem('userInfo', JSON.stringify(info))
    },
  },
})
