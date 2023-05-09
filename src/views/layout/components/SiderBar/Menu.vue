<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    mode="inline"
    @openChange="openChange"
    @click="menuClick"
  >
    <MenuItem v-for="rou in routes" :key="rou.path" :route="rou" />
  </a-menu>
</template>
<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { routes } from '@/router/installRoute'
const router = useRouter()
const route = useRoute()
const selectedKeys = ref<string[]>([route.path])
const openKeys = ref<string[]>([localStorage.getItem('openKeys') as string])
const openChange = (keys: string[]): void => {
  const key = keys[keys.length - 1]
  openKeys.value = [key]
  localStorage.setItem('openKeys', key)
}
const menuClick = (e: any): void => {
  const path = e.key
  if (route.path === path) return
  router.push(path)
}
</script>
