<template>
  <el-dialog v-model="dialogTableVisible">
    <SearchMenu :closeDialog="closeDialog" />
  </el-dialog>
  <el-aside class="aside-menu" :width="isHide ? collapsedWidth : fullWidth">
  <el-menu class="el-menu-vertical"
        router
        :default-active="$route.path"
        :collapse="isCollapseFromProp"
        active-text-color="#ffd04b"
        unique-opened
      >
        <el-menu-item @click="handledialog">
          <el-icon><Search /></el-icon>
          <template #title>{{ $t('搜索') }}</template>
        </el-menu-item>
        <template v-for="item in filteredMenu" :key="item.path">
          <el-sub-menu v-if="item.children" :index="item.path">
            <template #title>
              <el-icon><Menu /></el-icon>
              <span>{{ $t(item.meta.title) }}</span>
            </template>
            <template v-for="child in item.children" :key="child.path">
              <el-menu-item :index="child.path">
                {{ $t(child.meta.title) }}
              </el-menu-item>
            </template>
          </el-sub-menu>
          <el-menu-item v-else :index="item.path" v-auth="item.meta.permission">
            <el-icon><Menu /></el-icon>
            <template #title>{{ $t(item.meta.title) }}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
</template>

<script setup>
const menuUtils = useMenu()
const windowWidth = ref(window.innerWidth);
const { t } = useI18n();
// 监听窗口大小变化
window.addEventListener('resize', () => {
  windowWidth.value = window.innerWidth;
  if (windowWidth.value < 768) {
    isCollapseLocal.value = false;
  }
});
// 本地状态变量
const isCollapseLocal = ref(false);
const isHide = computed(() => { return windowWidth.value < 768 }) // 根据实际需求调整阈值
const collapsedWidth = computed(() => isCollapseLocal.value ? '64px' : '0px');
const fullWidth = computed(() => isCollapseLocal.value ? '64px' : '200px');

const dialogTableVisible = ref(false)
const handledialog = () => {
  dialogTableVisible.value = true;
}
const closeDialog = () => {
  dialogTableVisible.value = false; // 关闭对话框
};
const filteredMenu = computed(() => {
  return menuUtils.getMenuWithI18n(t).getMenu();
})

const props = defineProps({
  isCollapse: {
    type: Boolean,
    required: true
  }
})
const isCollapseFromProp = computed(() => props.isCollapse);
watch(isCollapseFromProp, (newVal) => {
  isCollapseLocal.value = newVal;
});
</script>

<style scoped>
.el-menu-vertical {
  height: 100%; /* 使菜单占据整个侧边栏高度 */
}
.aside-menu {
  transition: width 0.3s; /* 添加过渡效果，使宽度变化更平滑 */
}
</style>