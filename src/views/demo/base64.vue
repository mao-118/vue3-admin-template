<template>
  <BaseContainer>
    <div class="app-container">
      <a-divider>文本转base64</a-divider>
      <a-row :gutter="20">
        <a-col :span="12">
          <a-textarea v-model="text" />
        </a-col>
        <a-col :span="12">
          <a-textarea v-model="textBase64" disabled />
        </a-col>
      </a-row>
      <a-divider>文件转base64</a-divider>
      <a-row :gutter="20">
        <a-col :span="12">
          <a-button style="display: block; margin: 0 auto" color="#44bd87" @click="open">Choose Files</a-button>
          <input ref="uploadFileRef" type="file" hidden @change="change" />
        </a-col>
        <a-col :span="12">
          <a-input v-model="fileBase64" :rows="5" type="textarea" disabled />
        </a-col>
      </a-row>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
import { useBase64 } from '@vueuse/core'

const uploadFileRef = ref()
const text = ref('')
const file = ref()
const { base64: textBase64 } = useBase64(text)
const { base64: fileBase64 } = useBase64(file)

const open = () => {
  uploadFileRef.value.click()
}
const change = (e: any) => {
  file.value = e.target.files[0]
}
</script>
<style scoped></style>
