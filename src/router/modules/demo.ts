import Layout from '@/views/layout/index.vue'
import { PieChartOutlined } from '@ant-design/icons-vue'
export default {
  path: '/demo',
  name: 'demo',
  component: Layout,
  meta: { title: '案例', icon: PieChartOutlined },
  children: [
    {
      path: '/demo/map',
      name: 'map',
      meta: { title: 'map' },
      component: () => import('@/views/demo/map.vue'),
    },
    {
      path: '/demo/imgLazy',
      name: 'imgLazy',
      meta: { title: '懒加载' },
      component: () => import('@/views/demo/imgLazy.vue'),
    },
    {
      path: '/demo/draggable',
      name: 'draggable',
      meta: { title: '拖拽' },
      component: () => import('@/views/demo/draggable.vue'),
    },
    {
      path: '/demo/base64',
      name: 'base64',
      meta: { title: 'base64' },
      component: () => import('@/views/demo/base64.vue'),
    },
    {
      path: '/demo/useIcon',
      name: 'useIcon',
      meta: { title: 'useIcon' },
      component: () => import('@/views/demo/useIcon.vue'),
    },
    {
      path: '/demo/userMedia',
      name: 'userMedia',
      meta: { title: '用户媒体' },
      component: () => import('@/views/demo/userMedia.vue'),
    },
  ],
}
