<template>
  <div style="min-height: 100vh" class="flex">
    <SilderBar />
    <div class="layout-content">
      <NavBar />
      <div class="layout-main">
        <AppMain />
      </div>
      <!-- 底部信息 -->
      <Footer />
    </div>
  </div>
</template>
<script lang="ts" setup>
import AppMain from './components/AppMain.vue'
import SilderBar from './components/SilderBar/index.vue'
import NavBar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
<style scoped lang="scss">
.layout-content {
  height: 100vh;
  overflow-y: scroll;
  flex: 1;
}
</style>
