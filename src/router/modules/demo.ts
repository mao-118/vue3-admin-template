import Layout from '@/views/layout/index.vue'
export default {
  path: '/demo',
  name: 'demo',
  component: Layout,
  meta: { title: '案例' },
  children: [
    {
      path: '/demo/map',
      name: 'map',
      meta: { title: 'map' },
      component: () => import('@/views/demo/map.vue'),
    },
  ],
}
