<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div class="logo" />
    <Menu />
  </a-layout-sider>
</template>
<script lang="ts" setup>
import Menu from './Menu.vue'
const collapsed = ref<boolean>(false)
</script>
