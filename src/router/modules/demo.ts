import Layout from '@/layout/index.vue'
export default {
  path: '/demo',
  name: 'demo',
  component: Layout,
  meta: { title: '案例', icon: 'User' },
  children: [

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
      path: '/demo/useIcon',
      name: 'useIcon',
      meta: { title: 'useIcon' },
      component: () => import('@/views/demo/useIcon.vue'),
    },

    {
      path: '/demo/svgIcon',
      name: 'svgIcon',
      meta: { title: 'svgIcon' },
      component: () => import('@/views/demo/svgIcon.vue'),
    },
    {
      path: '/demo/table',
      name: 'table',
      meta: { title: 'table' },
      component: () => import('@/views/demo/table.vue'),
    },
  ],
}
