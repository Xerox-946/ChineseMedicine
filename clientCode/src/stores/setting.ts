// import { useApi } from "~/composables/useApi"
import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', {
  state: () => ({
    language: '' as string,
  }),
  getters: {
    getLanguage: (state) => state.language === '' ? 'zh' : state.language,
  },
  actions: {
    changeLanguage(language: string) {
      this.language = language
    },
  },
  persist: true // 启用持久化
})