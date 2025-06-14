// plugins/directive.permission.ts
import type { App, Directive } from 'vue'
import { useAuthStore } from '~/stores/auth'

// 定义指令
const permissionDirective: Directive<HTMLElement, string | string[]> = {
  mounted(el, binding) {
    const { value } = binding
    // 从 store 获取用户权限列表（示例使用 useAuthStore）
    const authStore = useAuthStore() // 假设你有一个权限存储
    const hasPermission = authStore.checkActionPermission(value);
    // 无权限时移除元素
    if (!hasPermission) {
      el.parentNode?.removeChild(el);
    }
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  // 注册全局指令
  nuxtApp.vueApp.directive('permission', permissionDirective)
})