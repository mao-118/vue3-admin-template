<template>
  <a-layout style="min-height: 100vh">
    <SiderBar />
    <a-layout>
      <NavBar />
      <a-layout-content style="margin: 16px">
        <AppMain />
      </a-layout-content>
      <!-- 底部信息 -->
      <!-- <Footer /> -->
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import AppMain from "./components/AppMain.vue";
import SiderBar from "./components/SiderBar/index.vue";
import NavBar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
<style scoped lang="scss">
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
