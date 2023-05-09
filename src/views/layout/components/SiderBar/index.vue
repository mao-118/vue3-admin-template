<template>
  <a-layout-sider v-model:collapsed="collapsed" theme="light" collapsible>
    <div class="logo" />
    <Menu />
  </a-layout-sider>
</template>
<script lang="ts" setup>
import Menu from './Menu.vue'
const collapsed = ref<boolean>(false)
</script>
<style scoped>
.logo {
  height: 31px;
  background: rgba(0, 0, 0, 0.2);
  margin: 16px;
}
</style>
