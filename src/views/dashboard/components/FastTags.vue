<template>
  <div class="fast-tags">
    <a-card title="快速开始 / 便捷导航">
      <div>
        <a-tag color="success">success</a-tag>
        <a-tag color="processing">processing</a-tag>
        <a-tag color="error">error</a-tag>
        <a-tag color="warning">warning</a-tag>
        <a-tag color="default">default</a-tag>
        <a-tag color="pink">pink</a-tag>
        <a-tag color="red">red</a-tag>
        <a-tag color="orange">orange</a-tag>
        <a-tag color="green">green</a-tag>
        <a-tag color="cyan">cyan</a-tag>
        <a-tag color="blue">blue</a-tag>
        <a-tag color="purple">purple</a-tag>
        <a-tag style="background: #fff; border-style: dashed; cursor: pointer">
          <plus-outlined />
          New Tag
        </a-tag>
      </div>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue'
</script>
<style scoped>
.ant-tag {
  margin-bottom: 10px;
}
</style>
