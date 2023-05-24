// element-plus 二次封装hooks
import { ElNotification, ElMessage } from 'element-plus'
import 'element-plus/es/components/notification/style/css'
import 'element-plus/es/components/message/style/css'
export const useNotification = (title: string = '默认标题', message: string = '默认message', type: any = 'success') => {
  ElNotification({
    title,
    message,
    type,
  })
}
export const useMessage = (message: string = '默认message', type: any = 'success') => {
  ElMessage({
    message,
    type,
  })
}
