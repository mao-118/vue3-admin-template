import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './installRoute'

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
  console.log({ form })
  document.title = (to.meta.title as string) || '默认标题'
  next()
})

router.afterEach((to) => {
  console.log({ to })
})

export default router
