<template>
  <BaseContainer>
    <div class="app-container">
      <div>
        <p>将网站图标更改为</p>
        <a-button
          v-for="(item, index) in iconList"
          :key="index"
          :type="active === index ? 'primary' : 'default'"
          @click="handleClick(index)"
          >{{ item.name }}</a-button
        >
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
import { message } from 'ant-design-vue'
import { useFavicon } from '@vueuse/core'
const icon = useFavicon()
const active = ref(0)
const iconList = reactive([
  {
    name: 'vite',
    icon: 'https://vitejs.cn/logo.svg',
  },
  {
    name: 'element-plus',
    icon: 'https://element-plus.gitee.io/images/element-plus-logo.svg',
  },
])
const handleClick = (index: number) => {
  active.value = index
  icon.value = iconList[index].icon
  message.success('图片切换成功！')
}
</script>
