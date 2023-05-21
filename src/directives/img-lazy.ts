import { useIntersectionObserver } from '@vueuse/core'
export default {
  mounted(el: HTMLElement, { value }: any) {
    const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        //判断是否进入了可视区
        ;(el as HTMLImageElement).src = value + `&date=${Date.now()}`
        stop() //触发之后就停止监听
      }
    })
  },
}
