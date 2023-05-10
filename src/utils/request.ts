import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { message } from 'ant-design-vue'
interface IResult {
  data: any
  msg: string
  code: number
}
const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
})
const showError = (msg: string) => {
  message.error(msg || '请求失败！！！')
}
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig<IResult>) => {
    const token = localStorage.getItem('token')
    if (token) config.headers.token = token
    return config
  },
  (error: Error) => {
    showError(error.message)
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const data = response.data
    if (data.code !== 200) {
      showError(data.msg)
      return Promise.reject(new Error(data.msg))
    }
    return Promise.resolve(response)
  },
  (error: Error) => {
    showError(error.message)
    return Promise.reject(error)
  }
)

const http = (config: any): Promise<IResult> => {
  return new Promise((resolve, reject) => {
    service({ ...config })
      .then((res) => {
        resolve(res.data)
      })
      .catch((error) => {
        console.log('error', error)
        reject(error)
      })
  })
}
export default http
