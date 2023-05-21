import { defineStore } from 'pinia'
interface IUser {
  name: string
  token: string
}
export default defineStore(
  'userStore',
  () => {
    const userInfo = ref<IUser>({
      name: '',
      token: '',
    })
    const setUserInfo = (info: IUser) => {
      userInfo.value = info
    }
    return {
      userInfo,
      setUserInfo,
    }
  },
  {
    persist: true, //开启持久化
  }
)
