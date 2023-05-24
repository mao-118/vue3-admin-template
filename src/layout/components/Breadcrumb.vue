<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in routeList" :key="item.path">{{ item.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts">
import type { RouteLocationMatched } from 'vue-router'
interface IRoute {
  title: string | unknown
  path: string
}
const route = useRoute()
const routeList = ref<IRoute[]>([])
const setRouteList = (list: RouteLocationMatched[]): IRoute[] => {
  return list.map((_: RouteLocationMatched) => {
    return {
      title: _.meta.title,
      path: _.path,
    }
  })
}
routeList.value = setRouteList(route.matched)
watch(
  () => route.matched,
  (v) => {
    routeList.value = setRouteList(v)
  }
)
</script>
