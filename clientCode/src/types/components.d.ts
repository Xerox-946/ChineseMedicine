import type { DefineComponent } from 'vue'

declare module 'vue' {
  interface ComponentCustomOptions {
    fileName?: string // 确保属性名一致
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    fileName?: string
  }
}