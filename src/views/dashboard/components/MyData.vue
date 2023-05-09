<template>
  <div class="data">
    <a-card title="数据/指数">
      <div id="main" ref="main"></div>
    </a-card>
  </div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts'
const options = reactive<echarts.EChartsOption>({
  title: {
    text: '',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    data: ['Allocated Budget', 'Actual Spending'],
  },
  radar: {
    shape: 'circle',
    indicator: [
      { name: 'Sales' },
      { name: 'Administration' },
      { name: 'Information Technology' },
      { name: 'Customer Support' },
      { name: 'Development' },
      { name: 'Marketing' },
    ],
    splitArea: {
      areaStyle: {
        color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowBlur: 10,
      },
    },
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget',
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending',
        },
      ],
    },
  ],
})
const main = ref()
let myChart: echarts.ECharts | null = null
const initEcharts = () => {
  myChart = echarts.init(main.value)
  myChart.setOption(options)
}
const resize = () => {
  myChart && myChart.resize()
}
onMounted(() => {
  initEcharts()
  window.addEventListener('resize', resize)
})
onUnmounted(() => {
  window.removeEventListener('resize', resize)
})
</script>
<style scoped>
#main {
  height: 500px;
}
</style>
