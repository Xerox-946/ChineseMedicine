import { useTabsStore } from "~/stores/tabs"
export default defineNuxtRouteMiddleware((to) => {
  const isToLogin = /\/login$/.test(to.path);
  if (!isToLogin) {
    const store = useTabsStore()
    const isAffix = to.meta.affix === true
    const instance = getCurrentInstance()
    if (store.destroyedViews.has(to.path)) {
      // to.meta.keepalive = false
      // const keepAlive = useNuxtApp().vueApp._context.provides
      store.destroyedViews.delete(to.path)
    }

    if (isAffix) {
      // 固定标签页处理
      const exists = store.tabs.some(tab => tab.path === to.path)
      if (!exists) {
        store.addTab(to)
      }
    } else {
      store.addTab(to)
    }

    // 处理动态路由匹配
    if (to.matched.some(record => record.meta.keepalive)) {
      store.cachedViews.add(to.path)
    }
  } 
})