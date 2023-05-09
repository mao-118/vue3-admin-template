<template>
  <div class="project">
    <a-card title="进行中的项目">
      <template #extra><a href="#">全部项目</a></template>
      <a-card-grid v-for="item in 6" :key="item" style="width: 33.3%; height: 143px">
        <div class="flex items-center">
          <a-avatar :size="24">
            <template #icon>
              <img src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png" alt="" />
            </template>
          </a-avatar>
          <span class="ml-2">React</span>
        </div>
        <div class="text-gray-600 mb-2 mt-2">那是一种内在的东西，他们到达不了，也无法触及的</div>
        <div class="text-gray-600 text-xs">科学搬砖组 几秒前</div>
      </a-card-grid>
    </a-card>
  </div>
</template>
