<template>
  <a-layout-header class="flex items-center pl-6 pr-6 box-border bg-white">
    <Breadcrumb />
    <div class="nav-list flex justify-end flex-1 items-center">
      <div class="mr-8">
        <SearchOutlined class="cursor-pointer" :style="{ fontSize: '20px' }" />
      </div>
      <QuestionCircleOutlined class="cursor-pointer mr-8" :style="{ fontSize: '20px' }" />
      <div class="mr-8">
        <a-badge count="5">
          <BellOutlined class="cursor-pointer" :style="{ fontSize: '20px' }" />
        </a-badge>
      </div>

      <div class="nav-item">
        <a-dropdown :trigger="['hover']" placement="bottom">
          <a class="ant-dropdown-link" @click.prevent>
            <a-avatar style="background-color: #87d068">
              <template #icon>
                <UserOutlined />
              </template>
            </a-avatar>
            <span class="ml-2">Admin</span>
          </a>
          <template #overlay>
            <div class="my-dropdown">
              <div class="h-8 cursor-pointer flex items-center">
                <UserOutlined />
                <span class="ml-2">个人中心</span>
              </div>
              <div class="h-8 cursor-pointer flex items-center">
                <SettingOutlined />
                <span class="ml-2">个人设置</span>
              </div>
              <a-menu-divider />
              <div class="h-8 cursor-pointer flex items-center" @click="logout">
                <LogoutOutlined />
                <span class="ml-2">退出</span>
              </div>
            </div>
          </template>
        </a-dropdown>
      </div>
    </div>
  </a-layout-header>
</template>
<script lang="ts" setup>
import Breadcrumb from './Breadcrumb.vue'
import {
  UserOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  LogoutOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
const router = useRouter()
const logout = () => {
  // message.success('ok')
  router.push('/login')
}
</script>
<style scoped lang="scss">
.my-dropdown {
  width: 150px;
  margin-top: 19px;
  box-shadow: 1px 0px 10px 0px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  padding: 5px 0;
  & > div {
    margin-top: 10px;
    padding: 0 10px;
  }
  & > div:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
