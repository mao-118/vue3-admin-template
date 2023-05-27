<template>
  <div class="data">
    <el-card>
      <template #header>
        <div class="flex justify-between">
          <h3>数据 / 指数</h3>
        </div>
      </template>
      <div id="main" ref="main"></div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { useEcharts } from '@/hooks'
import type { EChartsOption } from 'echarts'
const options: EChartsOption = {
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
}
const main = ref()

onMounted(() => {
  useEcharts(main.value, options)
})
</script>
<style scoped>
#main {
  height: 500px;
}
.el-card {
  margin-bottom: 20px;
}
</style>
