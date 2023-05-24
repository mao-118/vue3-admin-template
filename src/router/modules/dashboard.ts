import Layout from '@/layout/index.vue'

export default [
  {
    path: '/dashboard',
    name: 'layout',
    component: Layout,
    hasOnlyOneChildren: true,
    meta: { title: 'dashboard', icon: 'User' },
    children: [
      {
        path: '/index',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '工作台', icon: 'User' },
      },
    ],
  },
]
