<template>
  <div class="base-container">
    <a-card>
      <slot />
    </a-card>
  </div>
</template>
<style scoped lang="scss">
.base-container {
  width: 100%;
  height: 100%;
  padding: 16px;
  .ant-card {
    min-height: 100%;
  }
}
</style>
