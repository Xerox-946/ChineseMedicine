export interface TabItem {
  path: string
  title: string
  icon?: string
  refreshKey?: number // 用于强制刷新
}
import { defineStore } from 'pinia'
export const useTabsStore = defineStore('tabs', {
  state: () => ({
    tabs: [
      { path: '/', title: '首页', icon: 'House' }
    ] as TabItem[],
    activeTab: '/',
    cachedViews: new Set<string>(['/']),
    destroyedViews: new Set<string>() // 新增强制销毁记录
  }),
  actions: {
    addTab(route: any) {
      const { path, meta } = route
      const exists = this.tabs.find(tab => tab.path === path)
      
      if (!exists) {
        this.tabs.push({
          path,
          title: meta.title || path.split('/').pop() || '未知',
          icon: meta.icon as string || '',
          refreshKey: 0
        })
        this.cachedViews.add(path)
      } else if (meta.affix) {
        // 处理需要刷新的固定页签
        exists.refreshKey = (exists.refreshKey || 0) + 1
      }
      
      this.activeTab = path
    },

    removeTab(path: string) {
      if (path === '/') return
      
      this.tabs = this.tabs.filter(tab => tab.path !== path)
      this.cachedViews.delete(path)

      // 记录强制销毁状态
      this.destroyedViews.add(path)
    },

    // 强制刷新当前页签
    refreshCurrentTab() {
      const tab = this.tabs.find(tab => tab.path === this.activeTab)
      if (tab) {
        tab.refreshKey = (tab.refreshKey || 0) + 1
      }
    }
  },
})