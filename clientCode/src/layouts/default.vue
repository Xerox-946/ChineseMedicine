<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
const authStore = useAuthStore()
const colorMode = useColorMode()
const windowWidth = ref(window.innerWidth);

window.addEventListener('resize', () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value < 768) {
    isCollapse.value = false;
  }
});

const isHide = computed(() => {
  return windowWidth.value < 1055; // 根据实际需求调整阈值
})
const isCollapse = ref(false)

const logout = () => {
  authStore.logout();
  navigateTo('/login')
}
const isLight = computed(() => colorMode.value === 'light')
const changeTheme = () => {
  colorMode.value = colorMode.value === 'light' ? 'dark' : 'light';

}

const changePassword = () => {
  // 实现修改密码的逻辑 <!-- text-color="#fff" --> <!-- background-color="#545c64" -->
}

</script>
<template>
  <TipBox/>
  <el-container class="main-container">
    <Sidebar :is-collapse="isCollapse"/>
    <el-container class="main-content">
      <el-header class="header-container">
        <el-button class="custom-button" @click="isCollapse = !isCollapse" text>
          <el-icon v-if="!isCollapse"><ArrowLeftBold color="#fff" /></el-icon>
          <el-icon v-else><ArrowRightBold color="#fff" /></el-icon>
        </el-button>
        <div class="header-right">
        <!-- 用户信息 -->
          <span class="el-dropdown-link" v-if="!isHide">
            {{ $t('管理员') }}：{{ authStore.getUserName }}, {{ $t('您好') }},{{ $t('感谢登陆使用') }}！ <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <LanguageButton/>
          <el-button class="thema-button" @click="changeTheme" text>
            <el-icon v-if="!isLight"><el-icon><Sunny /></el-icon></el-icon>
            <el-icon v-else><el-icon><Moon /></el-icon></el-icon>
          </el-button>
          <!-- 功能按钮：退出 -->
          <el-button text @click="logout">{{$t('退出')}}</el-button>

          <!-- 功能按钮：修改密码 -->
          <el-button text @click="changePassword">{{$t('修改密码')}}</el-button>
        </div>
      </el-header>
      <TabPane />
      <el-main>
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.main-container {
  /* display: flex;
  flex-direction: row; */
  height: 100vh; /* 确保容器占据整个视口高度 */
}

.custom-button {
  background-color: #545c64; /* 添加底色 */
  padding: 8px 16px; /* 可选：增加内边距以改善视觉效果 */
}

.thema-button {
  padding: 8px 16px; /* 可选：增加内边距以改善视觉效果 */
}

.custom-button:hover {
  background-color: #4f565e; /* 按下时的底色保持不变，避免视觉上的闪烁或变化 */
}

.main-content {
  display: flex;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; /* 可选：增加内边距以改善视觉效果 */
  border-bottom: 1px solid #ccc; /* 添加下边界线 */
}

.header-right {
  display: flex;
  align-items: center;
}

.header-right .el-dropdown-link,
.header-right .el-button {
  margin-left: 10px; /* 可选：增加子元素之间的间距 */
}


.tabs-container > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

</style>