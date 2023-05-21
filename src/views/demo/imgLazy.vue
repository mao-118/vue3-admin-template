<template>
  <BaseContainer>
    <div class="img-list">
      <img v-for="item in 100" :key="item" v-img-lazy="'https://cdn.seovx.com/?mom=302'" />
    </div>
  </BaseContainer>
</template>
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
