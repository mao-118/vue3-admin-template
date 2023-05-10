import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './installRoute'
import NProgress from '@/plugins/nprogress'
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/index',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        title: '登录',
      },
    },
    ...routes,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/errorPage/error404.vue'),
      meta: { title: '404' },
    },
  ],
})
router.beforeResolve((to, form, next) => {
  NProgress.start()
  document.title = `后台管理系统 | ${(to.meta.title as string) || '默认标题'}`
  const token = localStorage.getItem('token')
  // if(whiteList.includes(to.path)){ //路由白名单直接放行
  //   NProgress.done()
  //   return next()
  // }
  if (to.path === '/login' && token) {
    NProgress.done()
    return next('/')
  }
  if (to.path !== '/login' && !token) {
    NProgress.done()
    return next('/login')
  }
  next()
})

router.afterEach((to) => {
  NProgress.done()
})

export default router
