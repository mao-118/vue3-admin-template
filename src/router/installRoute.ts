import { RouteRecordRaw } from 'vue-router'
// 一键导入modules下的路由
function getRoutes(): RouteRecordRaw[] {
  const importRouter: Record<string, RouteRecordRaw[]> = import.meta.glob('./modules/*.ts', {
    eager: true,
    import: 'default',
  })
  const keys: string[] = Object.keys(importRouter)
  return keys.reduce((currentRoute: RouteRecordRaw[], nextRoute: string) => {
    currentRoute = currentRoute.concat(importRouter[nextRoute])
    return currentRoute
  }, [] as RouteRecordRaw[])
}
export const routes: RouteRecordRaw[] = getRoutes()
