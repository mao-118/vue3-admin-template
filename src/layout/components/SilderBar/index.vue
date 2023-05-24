<template>
  <div :class="['silder-bar', { isCollapse: layoutStore.isCollapse }]">
    <logo />
    <el-scrollbar>
      <Menu />
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import Menu from './Menu.vue'
import Logo from './logo.vue'
import { useLayoutStore } from '@/store'
const layoutStore = useLayoutStore()
</script>
<style lang="scss" scoped>
$logoHeight: 35px;
.silder-bar {
  width: 200px;
  border-right: 1px solid var(--el-menu-border-color);
  height: 100vh;
  flex-shrink: 0;
  transition: width 0.5s linear;
  &.isCollapse {
    width: 64px;
    overflow: hidden;
  }
}
.el-menu {
  border-right: unset;
}

.el-scrollbar {
  height: calc(100vh - $logoHeight);
}
</style>
