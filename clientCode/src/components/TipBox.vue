<template>
  <!-- <el-button text @click="open">Click to open Message Box</el-button> -->
</template>

<script lang="ts" setup>
import { useTipStore } from '~/stores/tip'
import { useAuthStore } from '~/stores/auth'
const tip = useTipStore()
const authStore = useAuthStore()

// 监听tip对象中的code属性
watch(() => tip.getCode, (newVal, oldVal) => {
  if (oldVal === 0 && newVal !== 0 ) { 
    // tip.reset()
    open(tip.getMsg)
    if (newVal === 401) {
      tip.reset()
      authStore.logout();
      navigateTo('/login')
    } else {
      tip.reset()
    }
  }
})

const open = (msg: string) => {
  ElMessage({
    message: msg,
    type: 'error',
  })
}
</script>
