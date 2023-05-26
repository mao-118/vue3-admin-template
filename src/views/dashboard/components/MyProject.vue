<template>
  <div class="project">
    <el-card>
      <template #header>
        <div class="flex justify-between">
          <h3>进行中的项目</h3>
          <a href="#">全部项目</a>
        </div>
      </template>
      <div class="pro-list flex flex-wrap">
        <div v-for="item in 9" :key="item" class="pro-itme w-1/3">
          <div class="flex items-center">
            <el-avatar :size="24" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"></el-avatar>
            <span class="ml-2">React</span>
          </div>
          <div class="text-gray-600 mb-2 mt-2">那是一种内在的东西，他们到达不了，也无法触及的</div>
          <div class="text-gray-600 text-xs">科学搬砖组 几秒前</div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<style lang="scss" scoped>
.pro-itme {
  box-sizing: border-box;
  border: 1px solid #eee;
  padding: 20px 10px;
  cursor: pointer;
  &:hover {
    box-shadow: var(--el-box-shadow-light);
  }
}
.el-card {
  margin-bottom: 20px;
}
</style>
