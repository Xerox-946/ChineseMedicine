<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      {{ $t(lan) }}
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh">{{ $t('中文') }}</el-dropdown-item>
        <el-dropdown-item command="ja">{{ $t('日文') }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useSettingStore } from '~/stores/setting'
import type { LanguageType } from '~/types/store'
const { locale } = useI18n()
const setting = useSettingStore()
const lan = ref('')
// 页面初始化时获取当前语言设置
onMounted(() => {
  transform(setting.language)
})

const handleCommand = (command: string) => {
  transform(command)
  setting.changeLanguage(command)
  locale.value = command as LanguageType // 切换语言
}

const transform = (command: string) => {
  if (command === 'zh') {
    lan.value = 'Chinese'
  } else {
    lan.value = 'Japanese'
  }
}

</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
