<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>
<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: '25px',
  },
  height: {
    type: String,
    default: '25px',
  },
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
})
</script>
