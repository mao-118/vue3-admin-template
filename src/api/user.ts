import request from '@/utils/request'
enum API {
  LOGIN = '/user/login',
  LOGOUT = '/user/logout',
}
export function loginApi<T = any>(data: T) {
  return request({
    url: API.LOGIN,
    method: 'post',
    data,
  })
}
export function logoutApi() {
  return request({
    url: API.LOGOUT,
    method: 'get',
  })
}
