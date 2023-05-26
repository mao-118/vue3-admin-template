<template>
  <div class="dynamic">
    <el-card>
      <template #header>
        <div class="flex justify-between">
          <h3>动态</h3>
        </div>
      </template>
      <div class="info-list">
        <div v-for="(item, index) in listData" :key="index" class="info-item">
          <div class="flex justify-between px-6 items-center">
            <el-avatar :size="64" :src="item.avatar" class="mr-4"></el-avatar>
            <div class="flex-1">
              <h4>{{ item.title }}</h4>
              <span>{{ item.description }}</span>
            </div>
            <div>
              <a key="list-loadmore-edit" class="mr-2">edit</a>
              <a key="list-loadmore-more">more</a>
            </div>
          </div>
          <el-divider />
        </div>
      </div>
    </el-card>
  </div>
</template>
<script setup lang="ts">
interface IListData {
  title: string
  avatar: string
  description: string
}
const listData = ref<IListData[]>([])
for (let i = 0; i < 9; i++) {
  listData.value.push({
    title: `ant design vue part ${i}`,
    avatar: `https://randomuser.me/api/portraits/men/${i}.jpg`,
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  })
}
</script>
<style scoped>
.el-card {
  margin-bottom: 20px;
}
</style>
