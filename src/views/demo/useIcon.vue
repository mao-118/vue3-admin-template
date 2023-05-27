<template>
  <BaseContainer>
    <div class="app-container">
      <div>
        <p>将网站图标更改为</p>
        <el-button
          v-for="(item, index) in iconList"
          :key="index"
          :type="active === index ? 'primary' : 'default'"
          @click="handleClick(index)"
          >{{ item.name }}</el-button
        >
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
import { useFavicon } from '@vueuse/core'
import { useMessage } from '@/hooks'
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
  useMessage('图片切换成功！')
}
</script>
