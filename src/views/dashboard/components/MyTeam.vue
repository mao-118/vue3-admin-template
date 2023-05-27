<template>
  <div class="team">
    <el-card title="团队">
      <template #header>
        <h3>团队</h3>
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
    text: '达标人数',
    textStyle: {
      color: '#a1a1a1',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: ['vue', 'react', 'uniapp', 'java', 'php', 'vant', 'element'],
    textStyle: {
      color: '#a1a1a1',
    },
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['vue', 'react', 'uniapp', 'java', 'php', 'vant', 'element'],
      axisLabel: {
        color: '#a1a1a1',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        color: '#a1a1a1',
      },
    },
  ],
  series: [
    {
      name: 'vue',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'react',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'uniapp',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'java',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'php',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top',
      },
      areaStyle: {},
      emphasis: {
        focus: 'series',
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320],
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
