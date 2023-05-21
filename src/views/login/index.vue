<template>
  <div class="login-container">
    <div class="login-content">
      <div class="header flex justify-center items-center">
        <img src="https://preview.pro.ant.design/logo.svg" alt="logo" class="logo" />
        <span class="ml-4">登陆</span>
      </div>
      <div class="tips text-center mt-2">中小型后台解决方案</div>
      <div class="login-box mt-6">
        <a-tabs v-model:activeKey="activeKey" centered>
          <a-tab-pane key="1" tab="账号密码登陆"></a-tab-pane>
          <a-tab-pane key="2" tab="手机号登陆"></a-tab-pane>
        </a-tabs>
        <a-form
          :model="formState"
          name="basic"
          :wrapper-col="{ span: 24 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <template v-if="activeKey === '1'">
            <a-form-item name="username" :rules="[{ required: true, message: '请输入用户名!' }]">
              <a-input v-model:value="formState.username" placeholder="用户名: admin or user">
                <template #prefix> <UserOutlined class="site-form-item-icon" /> </template
              ></a-input>
            </a-form-item>

            <a-form-item name="password" :rules="[{ required: true, message: '请输入密码!' }]">
              <a-input-password v-model:value="formState.password" placeholder="密码: 123456">
                <template #prefix>
                  <LockOutlined class="site-form-item-icon" />
                </template>
              </a-input-password>
            </a-form-item>
          </template>
          <template v-else>
            <a-form-item name="mobile" :rules="[{ required: true, message: '请输入手机号!' }]">
              <a-input v-model:value="formState.mobile" placeholder="请输入手机号!">
                <template #prefix> <MobileOutlined class="site-form-item-icon" /> </template
              ></a-input>
            </a-form-item>
            <a-form-item
              name="msgCode"
              :wrapper-col="{ span: 24 }"
              :rules="[{ required: true, message: '请输入验证码!' }]"
            >
              <div class="flex justify-between items-center">
                <a-input v-model:value="formState.msgCode" placeholder="请输入验证码!">
                  <template #prefix> <LockOutlined class="site-form-item-icon" /> </template
                ></a-input>
                <a-button
                  class="ml-2"
                  style="height: 40px"
                  :loading="msgLoading"
                  :disabled="time !== 60"
                  @click="sendMsg"
                >
                  {{ time === 60 ? `获取验证码` : `${time}s后重新获取` }}</a-button
                >
              </div>
            </a-form-item>
          </template>

          <a-form-item name="remember" :wrapper-col="{ span: 24 }">
            <div class="flex justify-between items-center">
              <a-checkbox v-model:checked="formState.remember">自动登陆</a-checkbox>
              <a class="login-form-forgot" href="javascript:void(0)">忘记密码?</a>
            </div>
          </a-form-item>

          <a-form-item :wrapper-col="{ span: 24 }">
            <a-button :loading="loading" class="w-full" style="height: 40px" type="primary" html-type="submit"
              >登陆</a-button
            >
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 24 }">
            <div class="flex items-center">
              <span class="tips mr-2">其他登陆方式: </span>
              <div class="icon-list">
                <alipay-circle-outlined
                  class="cursor-pointer mr-2"
                  :style="{ fontSize: '24px', color: 'rgba(0,0,0,.2)' }"
                />
                <taobao-circle-outlined
                  class="cursor-pointer mr-2"
                  :style="{ fontSize: '24px', color: 'rgba(0,0,0,.2)' }"
                />
                <weibo-circle-outlined
                  class="cursor-pointer mr-2"
                  :style="{ fontSize: '24px', color: 'rgba(0,0,0,.2)' }"
                />
              </div>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store'
import { message } from 'ant-design-vue'
import {
  UserOutlined,
  LockOutlined,
  MobileOutlined,
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons-vue'
const activeKey = ref('1')
interface IFormState {
  username: string
  password: string
  mobile: string
  msgCode: string
  remember: boolean
}
const formState = reactive<IFormState>({
  username: '',
  password: '',
  mobile: '',
  msgCode: '',
  remember: true,
})
const userStore = useUserStore()
const router = useRouter()
const loading = ref(false)
const onFinish = (values: IFormState) => {
  loading.value = true
  const { username, password } = values
  setTimeout(() => {
    loading.value = false

    if (activeKey.value === '1') {
      if (!['admin', 'user'].includes(username) || password !== '123456') {
        return message.error('用户名或密码错误')
      }
    }
    userStore.setUserInfo({ name: 'admin', token: 'kkkk-kkk' })
    router.push('/').then(() => {
      message.success('登陆成功!')
    })
  }, 500)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
const msgLoading = ref(false)
const time = ref(60)
const timer = ref(0)
const sendMsg = () => {
  msgLoading.value = true
  setTimeout(() => {
    message.success('短信已发送至手机,请注意查收!')
    msgLoading.value = false
    time.value--
    timer.value = window.setInterval(() => {
      time.value--
      if (time.value <= 0) {
        clearInterval(timer.value)
        time.value = 60
      }
    }, 1000)
  }, 1000)
}
</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
  .login-content {
    width: 328px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ::v-deep(.ant-tabs-nav)::before {
      border: 1px solid #e2e4e7;
    }
    .header {
      .logo {
        width: 44px;
        height: 44px;
      }
      span {
        font-size: 33px;
        color: #000;
        font-weight: 600;
      }
    }
    ::v-deep(.ant-input) {
      height: 32px;
    }
    .tips {
      color: rgba(0, 0, 0, 0.5);
    }
    .icon-list {
      .anticon:hover {
        color: #1890ff !important;
      }
    }
  }
}
</style>
