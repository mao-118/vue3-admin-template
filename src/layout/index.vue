<template>
  <div style="min-height: 100vh" class="flex">
    <SilderBar />
    <div class="layout-content">
      <NavBar />
      <div class="layout-main">
        <AppMain />
      </div>
      <!-- 底部信息 -->
      <!-- <Footer /> -->
    </div>
  </div>
</template>
<script lang="ts" setup>
import AppMain from './components/AppMain.vue'
import SilderBar from './components/Silderbar/index.vue'
import NavBar from './components/Navbar/index.vue'
import Footer from './components/Footer.vue'
</script>
<style scoped lang="scss">
.layout-content {
  height: 100vh;
  flex: 1;
}
.layout-main {
  height: calc(100vh - 55px);
  overflow-y: auto;
}
</style>
