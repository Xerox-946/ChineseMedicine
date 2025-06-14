<template>
  <TipBox />
  <div class="login-container">
    <el-row>
      <el-col :lg="14" :md="11" :sm="24" :xl="14" :xs="24">
        <div style="color: transparent">占位符</div>
      </el-col>
      <el-col :lg="9" :md="12" :sm="24" :xl="9" :xs="24">
        <el-form ref="formRef" class="login-form" label-position="left" :model="form" @submit.prevent="login">
          <el-form-item>
            <div class="title-tips">{{ $t('中医药管理系统') }}</div>
          </el-form-item>
          <el-form-item prop="username">
            <el-input v-model="form.username" :placeholder="$t('请输入用户名')" tabindex="1" type="test" />
            <template #prefix>
              <vab-icon icon="user-line" />
            </template>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" type="password" :placeholder="$t('请输入密码')" />
          </el-form-item>
          <el-form-item prop="code">
            <SIdentify :identifyCode="identifyCode" @change="handleVerify" @click="refreshCode" :tooltip="tooltip" />
            <el-input v-model="form.code" type="text" :placeholder="$t('请输入验证码')" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit" :loading="loading" class="login-btn">{{ $t('登录') }}</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <vab-footer class="footer-root" />
  </div>
</template>

<script setup>

definePageMeta({
  layout: 'login-layout',
})

import { useAuthStore } from "~/stores/auth"
import { useStaticStore } from "~/stores/static"

const form = reactive({ username: '', password: '', code: '' })
const loading = ref(false)
const router = useRouter()
const authStore = useAuthStore();
const staticStore = useStaticStore();
const useIdentifyCode = useCode()
const identifyCode = ref(useIdentifyCode.identifyCode)
const tooltip = ref('')
const handleVerify = () => {
  identifyCode.value = useIdentifyCode.identifyCode
}
const refreshCode = () => {
  tooltip.value = ''
  identifyCode.value = useIdentifyCode.refreshCode()
}

const login = async () => {
  if (!useIdentifyCode.validateVerifycode(form.code)) {
    tooltip.value = '验证码错误'
    return
  }
  try {
    loading.value = true
    await authStore.login(form);
    // 登录成功后跳转到首页
    router.push('/')
    await staticStore.fetchAllSysInfo();
  } finally {
    // 隐藏加载状态
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  background: url('../assets/login_images/background.jpg') center center fixed no-repeat;
  background-size: cover;

  :deep(.footer-root) {
    position: fixed;
    bottom: 20px;
    width: 100%;
    color: #fff !important;
    text-align: center;
    background: transparent;
    border: 0;
  }
}

.login-form {
  position: relative;
  max-width: 100%;
  padding: 4.5vh;
  margin: calc((100vh - 555px) / 2) 5vw 5vw;
  overflow: hidden;
  background: url('../assets/login_images/login_form.png');
  background-size: 100% 100%;

  .title-tips {
    margin-top: 29px;
    font-size: 26px;
    font-weight: 400;
    color: var(--el-color-white);
  }

  .login-btn {
    display: inherit;
    width: 220px;
    height: 50px;
    margin-top: 5px;
    background: var(--el-color-primary);
    border: 0;
  }
}
</style>
