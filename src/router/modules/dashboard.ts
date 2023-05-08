import Layout from '@/views/layout/index.vue'
import { PieChartOutlined } from '@ant-design/icons-vue'

export default [
  {
    path: '/dashboard',
    name: 'layout',
    component: Layout,
    meta: { title: '控制台', icon: PieChartOutlined },
    children: [
      {
        path: '/index',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页' },
      },
      {
        path: '/a',
        name: 'dashboard1',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页1' },
      },
      {
        path: '/b',
        name: 'dashboard2',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页2' },
      },
    ],
  },
]