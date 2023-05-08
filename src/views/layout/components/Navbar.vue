<template>
  <a-layout-header class="flex items-center pl-6 pr-6 box-border bg-white">
    <Breadcrumb />
    <div class="nav-list flex justify-end flex-1">
      <div class="nav-item">
        <a-dropdown :trigger="['click']" placement="bottom">
          <a class="ant-dropdown-link" @click.prevent>
            <a-avatar style="background-color: #87d068">
              <template #icon>
                <UserOutlined />
              </template>
            </a-avatar>
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item key="0">
                <div @click="logout">退出</div>
              </a-menu-item>
              <a-menu-item key="1">
                <div>个人设置</div>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </div>
  </a-layout-header>
</template>
<script lang="ts" setup>
import Breadcrumb from './Breadcrumb.vue'
import { UserOutlined } from '@ant-design/icons-vue'
const router = useRouter()
const logout = () => {
  router.push('/login')
}
</script>
