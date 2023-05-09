<template>
  <div class="dynamic">
    <a-card title="动态">
      <a-list class="demo-loadmore-list" item-layout="horizontal" :data-source="listData">
        <template #renderItem="{ item }">
          <a-list-item>
            <template #actions>
              <a key="list-loadmore-edit">edit</a>
              <a key="list-loadmore-more">more</a>
            </template>
            <a-list-item-meta :description="item.description">
              <template #title>
                <a href="javascript:void(0)">{{ item.title }}</a>
              </template>
              <template #avatar>
                <a-avatar :src="item.avatar" />
              </template>
            </a-list-item-meta>
          </a-list-item>
        </template>
      </a-list>
    </a-card>
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
