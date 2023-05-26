import * as echarts from 'echarts'
export function useEcharts(element: HTMLElement, options: echarts.EChartsOption) {
  const myEcahrts = echarts.init(element)
  myEcahrts && myEcahrts.setOption(options)
  function resize() {
    myEcahrts && myEcahrts.resize()
  }
  window.addEventListener('resize', resize)
  onBeforeUnmount(() => {
    window.removeEventListener('resize', resize)
  })
}
