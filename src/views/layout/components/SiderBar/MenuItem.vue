<template>
  <a-sub-menu v-if="showSubMenu(route)" :key="route.path">
    <template #icon>
      <component :is="route.meta?.icon" />
    </template>
    <template #title>
      <span>{{ route.meta?.title }}</span>
    </template>
    <MenuItem v-for="item in route.children" :key="item.path" :route="item" />
  </a-sub-menu>
  <!-- 只有一个子级时，直接显示子级，不显示父级 -->
  <MenuItem
    v-else-if="!route.hidden && route.hasOnlyOneChildren && route.children && route.children.length === 1"
    :route="route.children[0]"
  />
  <template v-else-if="(!route.hidden && !route.children) || route.children.length === 0">
    <a-menu-item :key="route.path">
      <template #icon>
        <component :is="route.meta?.icon" />
      </template>
      <span>{{ route.meta?.title }}</span>
    </a-menu-item>
  </template>
</template>
<script lang="ts" setup>
import MenuItem from './MenuItem.vue'
defineProps({
  route: {
    required: true,
    type: Object,
    default: () => ({}),
  },
})
const showSubMenu = (route) => {
  /**
   * 1. 是否设置 hidden 是否设置hasOnlyOneChildren 并且children.length===1(优先级大)
   * 2. 是否设置hideen 并且子路由存在则渲染
   * 3. 其他一律 false
   */
  if (!route.hidden && route.hasOnlyOneChildren && route.children && route.children.length === 1) return false
  else if (!route.hidden && route.children && route.children.length > 0) return true
  else return false
}
</script>
