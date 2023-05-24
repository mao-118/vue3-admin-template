<template>
  <div class="logo">
    <img src="@/assets/vue.svg" />
    <span v-show="!layoutStore.isCollapse">管理后台</span>
  </div>
</template>
<script setup lang="ts">
import { useLayoutStore } from '@/store'
const layoutStore = useLayoutStore()
</script>
<style lang="scss" scoped>
.logo {
  font-size: 20px;
  font-weight: 600;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 25px;
    height: 25px;
  }
  > span {
    margin-left: 10px;
    transition: all 0.5s linear;
  }
}
</style>
