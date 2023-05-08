<template>
  <div class="form-content">
    <div class="form-wrap">
      <a-form
        :model="form"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 16 }"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <h1 class="mb-6 pt-12 text-center">后台管理系统</h1>
        <a-form-item
          :rules="[{ required: true, message: 'Please input your username!' }]"
          label="用户名"
          name="username"
        >
          <a-input v-model:value="form.username" placeholder="用户名随便输"></a-input>
        </a-form-item>
        <a-form-item :rules="[{ required: true, message: 'Please input your password!' }]" label="密码" name="password">
          <a-input-password v-model:value="form.password" placeholder="密码随便输"></a-input-password>
        </a-form-item>
        <a-form-item :wrapper-col="{ offset: 2, span: 20 }">
          <a-button :loading="loading" class="w-full" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue'
import type { LocationQuery } from 'vue-router'
const loading = ref<boolean>(false)
const form = reactive<{ username: string; password: string }>({
  username: '',
  password: '',
})
const route = useRoute()
const router = useRouter()
const onFinish = (values: any) => {
  console.log('Success:', values)
  loading.value = true
  setTimeout(() => {
    const query = route.query
    let redirect = ''
    let otherQuery = {}
    if (query) {
      redirect = query.redirect as string
      otherQuery = getOtherQuery(query)
    }
    router.replace({ path: redirect || '/', query: otherQuery }).then(() => {
      message.success('登录成功')
    })
    loading.value = false
  }, 500)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
const getOtherQuery = (query: LocationQuery) => {
  return Object.keys(query).reduce((acc, cur) => {
    if (cur !== 'redirect') {
      acc[cur] = query[cur]
    }
    return acc
  }, {} as LocationQuery)
}
</script>

<style lang="scss" scoped>
.form-content {
  width: 100vw;
  height: 100vh;
  background: #291a5e;
  position: relative;

  .form-wrap {
    width: 370px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    background: linear-gradient(to bottom, rgb(164, 60, 246), rgb(0, 184, 249));
    padding: 2px;

    :deep(.a-form) {
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgb(30, 22, 75), rgb(43, 26, 97));
      border-radius: 10px;

      h1 {
        font-size: 24px;
        text-align: center;
        color: #fff;
      }

      .a-input {
        width: 250px;
      }
    }
  }
}
</style>
