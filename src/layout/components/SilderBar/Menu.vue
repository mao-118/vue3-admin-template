<template>
  <el-menu router :default-active="route.path" :collapse="layoutStore.isCollapse">
    <MenuItem v-for="route in routes" :key="route.path" :route="route" />
  </el-menu>
</template>
<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { routes } from '@/router/installRoute'
import { useLayoutStore } from '@/store'
import { useRoute } from 'vue-router'
const layoutStore = useLayoutStore()
const route = useRoute()
</script>
