<template>
  <div class="layout-header">
    <div class="flex justify-between items-center box-border">
      <div class="flex items-center">
        <el-icon size="25" class="cursor-pointer" @click="layoutStore.setCollapse(!layoutStore.isCollapse)">
          <Expand v-if="layoutStore.isCollapse" />
          <Fold v-else />
        </el-icon>
        <el-icon @click="layoutStore.setCollapse(true)"></el-icon>
        <Breadcrumb />
      </div>
      <div class="nav-list flex justify-end items-center">
        <!-- 搜索 -->
        <div class="mr-6 flex items-center">
          <svg-icon name="search" class="cursor-pointer" @click="showSearch" />
          <div class="search-select" :style="{ width: show ? 0 : '203px' }">
            <el-select v-model="value" filterable placeholder="input search text">
              <el-option v-for="item in data" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
        </div>
        <!-- 疑问 -->
        <svg-icon class="cursor-pointer" name="question" />
        <div class="mr-8">
          <!-- 消息 -->
          <el-dropdown trigger="click" placement="bottom">
            <el-badge :value="12" class="ml-4 mt-1">
              <svg-icon class="cursor-pointer" name="bell" />
            </el-badge>
            <template #dropdown>
              <div class="my-info" @click.prevent>
                <el-tabs v-model="activeKey">
                  <el-tab-pane v-for="item in tabPane" :key="item.value" :name="item.value" :label="item.label">
                    <div class="msg-list">
                      <div
                        v-for="sunItem in dataList"
                        :key="sunItem.id"
                        :class="['msg-item', { read: readList.includes(sunItem.id) }]"
                        @click="readList.push(sunItem.id)"
                      >
                        <img
                          :src="
                            item.value === 3
                              ? 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg'
                              : sunItem.img
                          "
                        />
                        <div>
                          <div>{{ sunItem.title }}</div>
                          <div>{{ sunItem.subTitle }}</div>
                        </div>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
                <div class="foot-btn">
                  <span>清空通知</span>
                  <span>查看更多</span>
                </div>
              </div>
            </template>
          </el-dropdown>
        </div>
        <!-- 设置 -->
        <div class="mr-8">
          <el-dropdown trigger="click" placement="bottom">
            <div>
              <svg-icon class="cursor-pointer" name="setting" />
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <div class="flex items-center">
                    <span class="mt-1">模式：</span>
                    <el-switch
                      v-model="isDark"
                      class="mt-2"
                      inline-prompt
                      :active-icon="Moon"
                      :inactive-icon="Sunny"
                      @change="changeDark"
                    />
                  </div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div class="flex items-center">
                    <span class="mt-1">主题：</span>
                    <el-color-picker v-model="color" @change="colorChange" />
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <!-- 用户信息 -->
        <div class="nav-item">
          <el-dropdown trigger="hover" placement="bottom">
            <div class="flex items-center">
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <span class="ml-2 text-blue-500">Admin</span>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="User">
                  <span>个人中心</span>
                </el-dropdown-item>
                <el-dropdown-item :icon="Setting">
                  <span>个人设置</span>
                </el-dropdown-item>
                <el-dropdown-item divided :icon="SwitchButton" @click.stop="logout">
                  <span>退出</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { logoutApi } from '@/api/user'
import { useUserStore, useLayoutStore } from '@/store'
import Breadcrumb from '../Breadcrumb.vue'
import { useMessage } from '@/hooks'
import { Sunny, Moon, User, Setting, SwitchButton } from '@element-plus/icons-vue'
const layoutStore = useLayoutStore()
const value = ref()
const data = ref<any[]>([
  { value: 1, label: 'Vue' },
  { value: 2, label: 'React' },
])
const router = useRouter()
const userStore = useUserStore()
const logout = async () => {
  await logoutApi()
  userStore.setUserInfo({ username: '', token: '' })
  router.push('/login').then(() => {
    useMessage('退出成功！')
  })
}

const show = ref(true)
const showSearch = () => {
  show.value = !show.value
}
const activeKey = ref(1)
interface DataItem {
  id: number
  title: string
  img: string
  subTitle: string
}
const readList = reactive<number[]>([])

const tabPane = reactive([
  { value: 1, label: '通知' },
  { value: 2, label: '消息' },
  { value: 3, label: '待办' },
])
const dataList: DataItem[] = reactive([])
for (let index = 0; index < 5; index++) {
  dataList.push({
    id: index,
    title: '你收到了14份新周报',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    subTitle: '6年前',
  })
}

const isDark = ref(false)
const changeDark = (v: string | number | boolean) => {
  const html = document.getElementsByTagName('html')[0]

  if (v) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}
const color = ref('#409EFF')
const colorChange = (c: string | null) => {
  // document.documentElement 是全局变量时
  const el = document.documentElement
  // const el = document.getElementById('xxx')

  // 获取 css 变量
  // getComputedStyle(el).getPropertyValue(`--el-color-primary`)

  // 设置 css 变量
  el.style.setProperty('--el-color-primary', c)
}
</script>
<style scoped lang="scss">
.layout-header {
  width: 100%;
  height: 55px;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  // position: fixed;
  // top: 0;
  // left: 200px;
  // z-index: 99999;
  padding: 0 20px;
  > div {
    height: 100%;
  }
}
.my-dropdown {
  width: 150px;
  box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05),
    0 12px 48px 16px rgba(0, 0, 0, 0.03);
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
.search-select {
  width: 203px;
  transition: width 0.3s linear;
  overflow: hidden;
}
.showSearch {
  width: 0;
}
.my-info {
  padding-top: 19px;
  background-color: #fff;
  width: 336px;
  box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05),
    0 12px 48px 16px rgba(0, 0, 0, 0.03);
}
:deep(.el-tabs__nav-scroll) {
  display: flex;
  justify-content: center;
}
.msg-list {
  .msg-item {
    display: flex;
    align-items: center;
    padding: 12px 32px;
    cursor: pointer;
    > img {
      width: 35px;
      height: 35px;
      margin-right: 20px;
    }
    &:hover {
      background-color: lightblue;
    }
    &.read {
      background-color: rgba(0, 0, 0, 0.06);
      &:hover {
        background-color: rgba(0, 0, 0, 0.06);
      }
    }
  }
}
.foot-btn {
  display: flex;
  border-top: 1px solid #eee;
  span {
    width: 50%;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;
    &:first-child {
      border-right: 1px solid #eee;
    }
  }
}
</style>
