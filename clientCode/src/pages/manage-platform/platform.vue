<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-tab-pane :label="$t('平台列表')">
      <DynamicTable :columns="columns" :data="tableData" :total="total" :current-page="currentPage" selection pagination
        @page-change="handlePageChange" :loading="isLoading" @edit="handleEdit" @delete="handleDelete"
        @delete-all="handleDeleteAll" :delete-btn="authStore.checkActionPermission('platList:delete')" />
    </el-tab-pane>
    <el-tab-pane :label="$t('添加平台')" v-if="authStore.checkActionPermission('platform:add')">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('平台编号') + '：'">
          <el-input v-model="form.platform_id" />
        </el-form-item>
        <el-form-item :label="$t('平台名称') + '：'">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item :label="$t('平台类型') + '：'">
          <el-select v-model="form.type">
            <el-option :label="$t('普通运营平台')" value="普通运营平台" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('简要描述') + '：'">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item :label="$t('状态')">
          <el-select v-model="form.status">
            <el-option :label="$t('正常')" value="1" />
            <el-option :label="$t('失效')" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('排序') + '：'">
          <el-input v-model="form.sort" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{ $t('提交') }}</el-button>
          <el-button @click="onReset">{{ $t('重置') }}</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane :label="$t('编辑平台')" v-if="isEdit && curTab == '2'">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('平台编号') + '：'">
          <el-input v-model="form.platform_id" :disabled="true" />
        </el-form-item>
        <el-form-item :label="$t('平台名称') + '：'">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item :label="$t('平台类型') + '：'">
          <el-select v-model="form.type">
            <el-option :label="$t('普通运营平台')" value="普通运营平台" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('简要描述') + '：'">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item :label="$t('状态')">
          <el-select v-model="form.status">
            <el-option :label="$t('正常')" value="1" />
            <el-option :label="$t('失效')" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('排序') + '：'">
          <el-input v-model="form.sort" />
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
import { ref, reactive } from 'vue'
import { useApi } from "~/composables/useApi"
import { ElMessage, ElMessageBox } from 'element-plus'
import { useAuthStore } from '~/stores/auth';
const { getInfo, postInfo } = useApi();
definePageMeta({
  keepalive: true,  // 必须为需要缓存的页面启用
  tabName: 'platform',  // 相同类型的详情页使用相同name
  title: '平台管理'
});
// 表格数据
const tableData = ref([]);
const authStore = useAuthStore();
const total = ref(0);
const curTab = ref('0');
const isEdit = ref(false);
const currentPage = ref(1)
const isLoading = ref(false);
const handlePageChange = async (page) => {
  isLoading.value = true
  await loadData(page).then(res => {
    isLoading.value = false
  });
  currentPage.value = page;
}

// 数据加载
const loadData = async (page) => {
  const getData = await getInfo("centre/getPlatformList", { Page: page });
  tableData.value = getData.data;
  total.value = getData.total;
}

const columns = [
  { label: '平台编号', prop: 'platform_id' },
  { label: '平台名', prop: 'name' },
  { label: '服务器数量', prop: 'server_count' },
  { label: '状态', prop: 'status', formatter: (row) => row.status ? '运行中' : '失效' },
  { label: '排序', prop: 'sort' },
]

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("centre/getPlatformList").then(res => {
      isLoading.value = false;
      tableData.value = res.data;
      total.value = res.total;
    });
  } finally {
    console.log(tableData.value, total.value);
  }
});

// do not use same name with ref
const form = reactive({
  platform_id: '',
  name: '',
  type: '普通运营平台',
  desc: '',
  status: '1',
  sort: '',
})

const onSubmit = async () => {
  if (form.sort === '') {
    form.sort = 255;
  }
  if (isEdit.value && curTab.value == 2) {
    await postInfo("centre/updatePlatform", form).then(res => {
    });
  } else {
    await postInfo("centre/addPlatform", form).then(res => {
    });
  }
  await loadData(currentPage.value);
  isEdit.value = false;
  curTab.value = '0';
  onReset();
}

const onReset = () => {
  form.platform_id = isEdit.value && curTab == "2" ? form.platform_id : '';
  form.name = '';
  form.type = '普通运营平台';
  form.desc = '';
  form.status = '1';
  form.sort = '';
}

const handleEdit = (data) => {
  form.platform_id = data.platform_id;
  form.name = data.name;
  form.type = data.type;
  form.desc = data.desc;
  form.status = data.status ? '1' : '0';
  form.sort = data.sort;
  isEdit.value = true;
  curTab.value = '2';
}

const handleDelete = (data) => {
  ElMessageBox.confirm(
    '确定要删除该数据吗?',
    '删除确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(async () => {
    await postInfo("centre/delPlatform", { ids: [data.platform_id] }).then(res => {
      loadData(currentPage.value);
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    });
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: 'Delete canceled',
    })
  })
}

const handleDeleteAll = (rows) => {
  const ids = rows.map(item => item.platform_id);
  ElMessageBox.confirm(
    '确定要删除该数据吗?',
    '删除确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
    postInfo("centre/delPlatform", { ids: ids }).then(res => {
      loadData(currentPage.value);
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      })
    });
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: 'Delete canceled',
    })
  })

}

const handleTab = (tab) => {
  onReset();
}
</script>

<style scoped>
:deep(.el-input__wrapper) {
  /* border-radius: 20px; */
  padding: 0 15px;
}

.example-pagination-block+.example-pagination-block {
  margin-top: 10px;
}

.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>