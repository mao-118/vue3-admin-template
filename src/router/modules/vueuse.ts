import Layout from '@/views/layout/index.vue'
export default {
  path: '/vueuse',
  name: 'vueuse',
  component: Layout,
  alwaysShow: true,
  meta: { title: 'vueuse' },
  children: [
    {
      path: '/vueuse/draggable',
      name: 'draggable',
      meta: { title: '拖拽' },
      component: () => import('@/views/vueuse/draggable.vue'),
    },
    {
      path: '/vueuse/base64',
      name: 'base64',
      meta: { title: 'base64' },
      component: () => import('@/views/vueuse/base64.vue'),
    },
    {
      path: '/vueuse/useIcon',
      name: 'useIcon',
      meta: { title: 'useIcon' },
      component: () => import('@/views/vueuse/useIcon.vue'),
    },
    {
      path: '/vueuse/userMedia',
      name: 'userMedia',
      meta: { title: '用户媒体' },
      component: () => import('@/views/vueuse/userMedia.vue'),
    },
  ],
}
