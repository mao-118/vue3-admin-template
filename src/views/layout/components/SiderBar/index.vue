<template>
  <a-layout-sider v-model:collapsed="collapsed" theme="light" collapsible>
    <div class="logo">管理后台</div>
    <Menu />
  </a-layout-sider>
</template>
<script lang="ts" setup>
import Menu from './Menu.vue'
const collapsed = ref<boolean>(false)
</script>
<style scoped>
.logo {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
}
</style>
