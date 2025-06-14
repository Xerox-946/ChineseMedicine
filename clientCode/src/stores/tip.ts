// import { useApi } from "~/composables/useApi"
import { defineStore } from 'pinia'

export const useTipStore = defineStore('tip', {
  state: () => ({
    code: 0 as number,
    msg: '' as string,
    // route: '' as string,
    display: false as boolean
  }),
  getters: {
    getMsg: (state) => state.msg,
    getCode: (state) => state.code,
    getDisplay: (state) => state.display
  },
  actions: {
    updateState(code: number, msg: string) {
      if (code === 0) { return }
      this.code = code,
      this.msg = msg,
      // this.route = route,
      this.display = true
    },
    reset() {
      this.code = 0,
      this.msg = '',
      // this.route = '',
      this.display = false
    }
  }
})