<template>
  <el-menu router :collapse="layoutStore.isCollapse">
    <MenuItem v-for="route in routes" :key="route.path" :route="route" />
  </el-menu>
</template>
<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { routes } from '@/router/installRoute'
import { useLayoutStore } from '@/store'
const layoutStore = useLayoutStore()
</script>
