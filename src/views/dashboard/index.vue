<template>
  <div class="header m-4">
    <div class="title mb-4">工作台</div>
    <div class="header-content flex justify-between">
      <div class="left flex">
        <a-avatar :size="64">
          <template #icon>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="" />
          </template>
        </a-avatar>
        <div class="info flex flex-col ml-4 justify-center">
          <span class="mb-2 text-2xl">早安,吴彦祖,祝你开心每一天!</span>
          <span class="text-gray-500">前端专家 | xx部门-xx公司</span>
        </div>
      </div>
      <div class="right">
        <div class="list flex">
          <div class="item">
            <span>项目数</span>
            <span>56</span>
          </div>
          <div class="item">
            <span>团队内排名</span>
            <span>8/24</span>
          </div>
          <div class="item">
            <span>项目访问</span>
            <span>2,223</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="main-content">
    <a-row :gutter="16">
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="14" :xxl="14" :xxxl="14">
        <MyProject />
        <MyDynamic />
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="10" :xxl="10" :xxxl="10">
        <FastTags />
        <MyData />
        <MyTeam />
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import MyProject from './components/MyProject.vue'
import MyDynamic from './components/MyDynamic.vue'
import FastTags from './components/FastTags.vue'
import MyData from './components/MyData.vue'
import MyTeam from './components/MyTeam.vue'
</script>
<style scoped lang="scss">
.header {
  padding: 16px;
  background-color: #fff;
  .title {
    font-size: 20px;
    font-weight: 600;
  }
  .right {
    .item {
      position: relative;
      padding: 0 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &::before {
        content: '';
        width: 1px;
        height: 40px;
        background-color: #f0f0f0;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      &:last-child::before {
        height: 0;
      }
    }
  }
}
.main-content {
  margin: 16px;
  .ant-col > div {
    margin-bottom: 16px;
  }
}
</style>
