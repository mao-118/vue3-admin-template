import Layout from '@/layout/index.vue'
export default {
  path: '/echarts',
  name: 'echarts',
  component: Layout,
  meta: { title: '图表', icon: 'User' },
  children: [
    {
      path: '/echarts/line',
      name: 'line',
      meta: { title: '折线图' },
      component: () => import('@/views/echarts/line.vue'),
    },
    {
      path: '/echarts/bar',
      name: 'bar',
      meta: { title: '柱状图' },
      component: () => import('@/views/echarts/bar.vue'),
    },
    {
      path: '/echarts/pie',
      name: 'pie',
      meta: { title: '饼图' },
      component: () => import('@/views/echarts/pie.vue'),
    },
  ],
}
