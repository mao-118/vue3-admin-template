import request from '@/utils/request'

export const getListApi = () => {
  return request({
    url: '/getList',
    method: 'get',
  })
}
