<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-tab-pane :label="$t('控制器列表')">
      <el-table :data="processedData" row-key="id" :tree-props="treeProps" :border="true" style="width: 100%"
        :indent="16">
        <!-- 分类名称列 -->
        <el-table-column prop="id" label="分类ID" width="100" />
        <el-table-column label="分类名称" width="300">
          <template #default="{ row }">
            <span style="cursor: pointer; margin-right: 8px" @click="toggleRow(row)">
            </span>
            <span>{{ $t(row.action_name) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="controller" label="控制器" width="150" />
        <el-table-column prop="action" label="操作标识" width="200" />
        <el-table-column :label="$t('状态')" v-permission="'permitAction:enabled'">
          <template #default="{ row }" >
            <el-tag :type="row.status ? 'success' : 'danger'" @click="changeStatus(row)" v-permission="'permitAction:enabled'">
              {{ row.status ? $t('启用') : $t('禁用') }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane :label="$t('添加控制器')" v-if="authStore.checkActionPermission('permitAction:add')">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('所属controller') + '：'">
          <el-select v-model="form.parent_id">
            <el-option :label="$t('控制器')" :value="0" />
            <el-option v-for="controller in processedData" :key="controller.id" :label="$t(controller.action_name)"
              :value="controller.id" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('资源数据监控') + '：'">
          <el-input v-model="form.action_name" />
        </el-form-item>
        <el-form-item :label="$t('action方法') + '：'">
          <el-input v-model="form.action" />
        </el-form-item>
        <el-form-item :label="$t('controller控制器') + '：'">
          <el-input v-model="form.controller" />
        </el-form-item>
        <el-form-item :label="$t('状态') + '：'">
          <el-switch v-model="form.status" size="primary" :active-text="$t('开启')" :inactive-text="$t('失效')" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{ $t('提交') }}</el-button>
          <el-button @click="onReset">{{ $t('重置') }}</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useAuthStore } from '~/stores/auth';

const { getInfo, postInfo } = useApi();
const state = reactive({
  treeProps: {
    children: 'children',
    hasChildren: (row) => row.children?.length > 0
  },
  processedData: []
});
const curTab = ref('0');
const authStore = useAuthStore();
const isLoading = ref(false);
const { treeProps, processedData } = toRefs(state);
const form = reactive({
  parent_id: 0,
  action_name: '',
  controller: '',
  action: '',
  status: true,
});

definePageMeta({
  keepalive: true,  // 必须为需要缓存的页面启用
  title: '控制器列表',
});

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("centre/getActionInfoList").then(res => {
      isLoading.value = false;
      state.processedData = processData(structuredClone(res.data));
      state.processedData = [...state.processedData];
    });
  } finally {
  }
});

// 数据加载
const loadData = async () => {
  isLoading.value = true;
  await getInfo("centre/getActionInfoList").then(res => {
    isLoading.value = false;
    state.processedData = processData(structuredClone(res.data));
    state.processedData = [...state.processedData];
  });
}

// 提交表单
const onSubmit = async () => {
  await postInfo("centre/addAction", form).then(res => {
  });
  curTab.value = '0';
  loadData();
  onReset();
}

const onReset = () => {
  form.parent_id = 0;
  form.action_name = '';
  form.controller = '';
  form.action = '';
  form.status = true;
}

// 数据预处理
const processData = (rawData) => {
  return rawData.map(node =>
    reactive({
      ...node,
      expanded: false,
      hasChildren: Array.isArray(node.children) && node.children.length > 0,
      children: processData(node.children || [])
    })
  )
}

// 切换展开状态
// 在toggleRow中添加详细日志
const toggleRow = (row) => {
  console.group('Toggle Row')

  if (row.hasChildren) {
    row.expanded = !row.expanded;
  }

  console.groupEnd();
}

// 更改状态
const changeStatus = async (row) => {
  // 这里可以添加更改状态的逻辑，例如调用API更新状态等。
  await postInfo("centre/changeAction", { ID: row.id }).then(res => {
    if (res === "ok") {
      row.status = !row.status; // 切换状态值
    } else {
      ElMessage.error('操作失败');
    }
  });

}

</script>

<style scoped>
/* 自定义缩进样式 */
.el-table__row td:first-child .cell {
  display: flex;
  align-items: center;
}

/* 悬停效果 */
.el-table__row:hover td {
  background-color: #f5f7fa !important;
}

/* 在style标签中添加 */
.el-icon-circle-plus,
.el-icon-remove {
  font-size: 12px !important;
  vertical-align: middle;
  margin-top: -2px;
  /* 微调垂直对齐 */
}
</style>