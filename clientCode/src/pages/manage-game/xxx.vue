<template>
  <div class="p-4">
    <el-card class="max-w-2xl mx-auto">
      <template #header>
        <div class="text-xl font-bold">欢迎使用 manage-game xxx</div>
      </template>
      
      <el-button type="primary" @click="showDialog">打开对话框</el-button>
      
      <el-dialog v-model="dialogVisible" title="提示">
        <span>这是一个 Element Plus 对话框</span>
        <template #footer>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确认</el-button>
        </template>
      </el-dialog>
    </el-card>
  </div>
</template>

<script setup>
const dialogVisible = ref(false)
</script>