<template>
  <div class="search-container">
    <!-- 搜索输入框 -->
    <el-input
      v-model="searchKeyword"
      placeholder="请输入搜索内容"
      clearable
      @keyup.enter="handleSearch"
      @clear="handleClear"
    >
      <template #prefix>
        <el-icon class="search-icon"><Search /></el-icon>
      </template>
    </el-input>

    <!-- 搜索按钮 -->
    <el-button
      type="primary"
      :icon="Search"
      @click="handleSearch"
      class="search-btn"
    >
      搜索
    </el-button>

    <!-- 搜索结果展示 -->
    <div v-if="searchResults.length" class="result-list">
      <el-scrollbar max-height="400px">
        <div 
          v-for="(item, index) in searchResults"
          :key="index"
          class="result-item"
        >
          {{ item.title }}
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

// 搜索关键词
const searchKeyword = ref('')

// 搜索结果
const searchResults = ref([])

// 模拟搜索 API
const mockSearchAPI = (keyword) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: Array.from({ length: 10 }, (_, i) => ({
          id: i,
          title: `${keyword} 结果 ${i + 1}`
        }))
      })
    }, 500)
  })
}

// 防抖处理
let searchTimer = null
const handleSearch = async () => {
  if (!searchKeyword.value.trim()) return
  
  clearTimeout(searchTimer)
  searchTimer = setTimeout(async () => {
    try {
      const { data } = await mockSearchAPI(searchKeyword.value)
      searchResults.value = data
    } catch (error) {
      console.error('搜索失败:', error)
      searchResults.value = []
    }
  }, 300)
}

// 清空搜索
const handleClear = () => {
  searchResults.value = []
}
</script>

<style scoped>
.search-container {
  display: flex;
  gap: 10px;
  max-width: 600px;
  margin: 20px auto;
  position: relative;
}

:deep(.el-input__wrapper) {
  border-radius: 20px;
  padding: 0 15px;
}

.search-btn {
  border-radius: 20px;
  padding: 0 25px;
}

.result-list {
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  border-radius: 4px;
  z-index: 999;
}

.result-item {
  padding: 12px 20px;
  cursor: pointer;
  transition: background 0.3s;
}

.result-item:hover {
  background: #f5f7fa;
}

.search-icon {
  color: var(--el-color-primary);
  font-size: 1.2em;
  margin-right: 5px;
}
</style>