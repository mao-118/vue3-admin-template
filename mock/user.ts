export default [
  // 用户登录接口
  {
    url: '/api/user/login', //请求地址
    method: 'post', //请求方式
    response: ({ body }) => {
      //获取请求体携带过来的用户名与密码
      const { username, password, type } = body
      if (type !== 1 || (username === 'admin' && password === '123456')) {
        return { code: 200, msg: '', data: { token: 'jdkjdsfdssf', username: 'admin' } }
      }
      return { code: 1000, msg: '账号或密码错误！', data: null }
    },
  },
  // 用户退出接口
  {
    url: '/api/user/logout', //请求地址
    method: 'get', //请求方式
    response: () => {
      return { code: 200, msg: '', data: null }
    },
  },
]
