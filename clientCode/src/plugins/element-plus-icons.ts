import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  // 遍历 Element Plus 的图标并注册它们
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component)
  }
})