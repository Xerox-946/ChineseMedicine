<!-- components/TabBar.vue -->
<template>
  <el-tabs
    v-model="activeTab"
    type="card"
    closable
    @tab-click="handleTabClick"
    @tab-remove="handleTabRemove"
    class="demo-tabs"
  >
    <el-tab-pane
      v-for="tab in tabs"
      :key="tab.path"
      :name="tab.path"
      :label="$t(tab.title)"
    >
      <!-- 空内容，实际内容由路由承载 -->
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import type { TabsPaneContext } from 'element-plus'
import { useTabsStore } from '~/stores/tabs'
const router = useRouter()
const route = useRoute()
const store = useTabsStore()
const { tabs } = storeToRefs(store)

// 当前激活标签
const activeTab = computed({
  get: () => store.activeTab,
  set: (val) => store.activeTab = val
})

// 标签点击处理
const handleTabClick = (tab: TabsPaneContext) => {
  if (tab.props.name !== route.path) {
    router.push(tab.props.name as string)
  }
}

// 标签关闭处理
const handleTabRemove = (path: string) => {
  if (path === '/') return // 禁止关闭首页
  
  store.removeTab(path)
  if (path === route.path) {
    const lastTab = store.tabs[store.tabs.length - 1]
    router.push(lastTab?.path || '/')
  }
}
</script>

<style lang="scss">
.demo-tabs {
  .el-tabs__header {
    margin: 0;
    .el-tabs__nav-wrap {
      padding: 0 20px;
      background: var(--el-bg-color-page);
    }
    .el-tabs__item {
      height: 32px;
      line-height: 32px;
      border-radius: 4px 4px 0 0;
      &.is-active {
        background: var(--el-bg-color);
      }
    }
  }
  
  .custom-tab-label {
    display: flex;
    align-items: center;
    .tab-title {
      max-width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tab-close {
      margin-left: 8px;
      &:hover {
        color: var(--el-color-primary);
      }
    }
  }
}
</style>