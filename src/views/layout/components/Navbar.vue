<template>
  <a-layout-header class="flex items-center pl-6 pr-6 box-border bg-white">
    <Breadcrumb />
    <div class="nav-list flex justify-end flex-1 items-center">
      <div class="mr-8 flex items-center">
        <SearchOutlined class="cursor-pointer mr-2" :style="{ fontSize: '20px' }" @click="showSearch" />
        <a-select
          v-model:value="value"
          show-search
          placeholder="input search text"
          style="width: 200px"
          :default-active-first-option="false"
          :show-arrow="false"
          :filter-option="false"
          :not-found-content="null"
          :options="data"
          :class="{ showSearch: show }"
          @search="handleSearch"
          @change="handleChange"
        ></a-select>
      </div>
      <QuestionCircleOutlined class="cursor-pointer mr-8" :style="{ fontSize: '20px' }" />
      <div class="mr-8">
        <a-dropdown :visible="visible" :trigger="['click']" placement="bottom" @visibleChange="visibleChange">
          <a-badge count="5">
            <BellOutlined class="cursor-pointer" :style="{ fontSize: '20px' }" />
          </a-badge>
          <template #overlay>
            <div class="my-info" @click.prevent>
              <a-tabs v-model:activeKey="activeKey" centered>
                <a-tab-pane key="1" tab="通知">
                  <a-list :split="false" item-layout="horizontal" :data-source="dataList">
                    <template #renderItem="{ item }">
                      <a-list-item>
                        <a-list-item-meta :description="item.subTitle">
                          <template #title>
                            <a href="javascript:void(0)">{{ item.title }}</a>
                          </template>
                          <template #avatar>
                            <a-avatar :src="item.img" />
                          </template>
                        </a-list-item-meta>
                      </a-list-item>
                    </template>
                  </a-list>
                </a-tab-pane>
                <a-tab-pane key="2" tab="消息">
                  <a-list :split="false" item-layout="horizontal" :data-source="dataList">
                    <template #renderItem="{ item }">
                      <a-list-item>
                        <a-list-item-meta :description="item.subTitle">
                          <template #title>
                            <a href="javascript:void(0)">{{ item.title }}</a>
                          </template>
                          <template #avatar>
                            <a-avatar :src="item.img" />
                          </template>
                        </a-list-item-meta>
                      </a-list-item>
                    </template>
                  </a-list>
                </a-tab-pane>
                <a-tab-pane key="3" tab="待办">
                  <a-list :split="false" item-layout="horizontal" :data-source="dataList">
                    <template #renderItem="{ item }">
                      <a-list-item>
                        <a-list-item-meta :description="item.subTitle">
                          <template #title>
                            <a href="javascript:void(0)">{{ item.title }}</a>
                          </template>
                          <template #avatar>
                            <a-avatar src="https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg" />
                          </template>
                        </a-list-item-meta>
                      </a-list-item>
                    </template>
                  </a-list>
                </a-tab-pane>
              </a-tabs>
              <div class="foot-btn">
                <span>清空通知</span>
                <span>查看更多</span>
              </div>
            </div>
          </template>
        </a-dropdown>
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
const value = ref()
const data = ref<any[]>([
  { value: 1, label: 'Vue' },
  { value: 2, label: 'React' },
])
const router = useRouter()
const logout = () => {
  router.push('/login')
}

const handleSearch = (val: string) => {
  console.log(val)
}
const handleChange = (val: string) => {
  console.log(val)
  value.value = val
}
const show = ref(false)
const showSearch = () => {
  show.value = !show.value
}
const activeKey = ref('1')
interface DataItem {
  title: string
  img: string
  subTitle: string
}
const dataList: DataItem[] = reactive([])
for (let index = 0; index < 5; index++) {
  dataList.push({
    title: '你收到了14份新周报',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    subTitle: '6年前',
  })
}

const visible = ref(false)
const visibleChange = (e) => {
  visible.value = e
}
</script>
<style scoped lang="scss">
.my-dropdown {
  width: 150px;
  margin-top: 19px;
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
.ant-select {
  transition: width 0.5s linear;
  overflow: hidden;
}
.showSearch {
  width: 0 !important;
}
.my-info {
  margin-top: 19px;
  background-color: #fff;
  width: 336px;
  box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05),
    0 12px 48px 16px rgba(0, 0, 0, 0.03);
}
.ant-list-item {
  padding: 12px 22px;
  cursor: pointer;
  &:hover {
    background-color: lightblue;
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
