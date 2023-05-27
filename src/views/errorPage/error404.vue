<template>
  <el-empty description="404">
    <el-button type="primary" @click="goHome">home</el-button>
  </el-empty>
</template>
<script setup lang="ts">
const router = useRouter()
const goHome = (): void => {
  router.replace('/')
}
</script>
