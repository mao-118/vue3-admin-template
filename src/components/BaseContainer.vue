<template>
  <div class="base-container">
    <el-card>
      <slot />
    </el-card>
  </div>
</template>
<style scoped lang="scss">
.base-container {
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  .el-card {
    min-height: 100%;
  }
}
</style>
