// import { useApi } from "~/composables/useApi"
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    username: null as string | null,
    actionPermissions: [] as string[],
    catalogs: [] as any[],
  }),
  getters: {
    isLogin: (state) => !!state.token,
    getUserName: (state) => state.username,
    getToken: (state) => state.token,
    getCatalogs: (state) => state.catalogs,
    checkActionPermission: (state) => (code: string | string[]) => {
      if (Array.isArray(code)) {
        return state.actionPermissions.some((permission) =>
          code.includes(permission),
        )
      }
      return state.actionPermissions.includes(code);
    },
  },
  actions: {
    async login(formData: any) {
      const { requestLogin } = useApi()
      const res = await requestLogin(formData)
      if (res.Code !== 0) {
        // 返回错误信息
      }
      this.token = res.Content.access_token,
        this.username = res.Content.username
      this.actionPermissions = res.Content.actions
      this.catalogs = res.Content.menuList
    },
    async logout() {
      this.token = null,
        this.username = '',
        this.actionPermissions = [],
        this.catalogs = []
    },

  },
  persist: true // 启用持久化
})