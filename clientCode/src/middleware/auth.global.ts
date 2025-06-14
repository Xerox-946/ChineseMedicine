import { useAuthStore } from "~/stores/auth"

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()
  const token = authStore.getToken
  const isToLogin = /\/login$/.test(to.path);
  if (isToLogin) {
    // 如果目标路由是登录页面，但用户已有 token，则重定向到首页
    if (token) {
      return navigateTo('/')
    }
  }

  // 如果目标路由不是登录页面且用户没有 token，则重定向到登录页面
  if (!token && !isToLogin) {
    return navigateTo('/login')
  }
})