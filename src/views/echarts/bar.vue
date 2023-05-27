<template>
  <BaseContainer>
    <div ref="main" class="main"></div>
  </BaseContainer>
</template>
<script setup lang="ts">
import { useEcharts } from '@/hooks'
const option = {
  title: {
    text: '柱状图',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [
        {
          value: 120,
          itemStyle: {
            color: '#f4a04c',
          },
        },
        {
          value: 200,
          itemStyle: {
            color: '#de33a5',
          },
        },
        {
          value: 500,
          itemStyle: {
            color: '#7890fa',
          },
        },
        { value: 80, itemStyle: { color: '#55b7ff' } },
        70,
        { value: 110, itemStyle: { color: '#45d4e6' } },
        130,
      ],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#96e6a1', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#d4fc79', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
      itemStyle: {
        borderRadius: [12, 12, 0, 0],
      },
    },
  ],
}
const main = ref()
onMounted(() => {
  useEcharts(main.value, option)
})
</script>
<style scoped lang="scss">
.main {
  width: 100%;
  height: 500px;
}
</style>
