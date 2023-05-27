<template>
  <BaseContainer>
    <div class="img-list">
      <img v-for="item in imgList" :key="item.id" v-img-lazy="item.url" />
    </div>
  </BaseContainer>
</template>
<script lang="ts" setup>
const imgList = ref<{ id: number; url: string; show: boolean }[]>([])
for (let i = 0; i < 100; i++) {
  imgList.value.push({
    url: 'https://cdn.seovx.com/?mom=302',
    show: false,
    id: i,
  })
}
</script>
<style scoped lang="scss">
.img-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > img {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }
}
</style>
