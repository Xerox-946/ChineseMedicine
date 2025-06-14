<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-tab-pane :label="$t('赛季列表')">
      <DynamicTable :columns="columns" :data="tableData" :total="total" :current-page="currentPage" selection pagination
        @page-change="handlePageChange" :loading="isLoading" @edit="handleEdit" @delete="handleDelete"
        @delete-all="handleDeleteAll" :delete-btn="authStore.checkActionPermission('seasonList:delete')" />
    </el-tab-pane>
    <el-tab-pane :label="$t('新增赛季')" v-if="authStore.checkActionPermission('seasonList:add')">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('名称') + '：'">
          <el-input v-model="form.Name" />
        </el-form-item>
        <el-form-item :label="$t('状态') + '：'">
          <el-select v-model="form.Enabled">
            <el-option :label="$t('正常开启')" value="1" />
            <el-option :label="$t('失效')" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{ $t('提交') }}</el-button>
          <el-button @click="onReset">{{ $t('重置') }}</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane :label="$t('编辑赛季')" v-if="isEdit && curTab == '2'">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('赛季ID') + '：'">
          <el-input v-model="form.SeasonID" :disabled="isEdit && curTab == '2'" />
        </el-form-item>
        <el-form-item :label="$t('名称') + '：'">
          <el-input v-model="form.Name" />
        </el-form-item>
        <el-form-item :label="$t('状态') + '：'">
          <el-select v-model="form.Enabled">
            <el-option :label="$t('正常开启')" value="1" />
            <el-option :label="$t('失效')" value="0" />
          </el-select>
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
  title: '赛季管理',
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
  const getData = await getInfo("centre/getSeasonList", { Page: page });
  tableData.value = getData.data;
  total.value = getData.total;
}

const columns = [
  { label: '赛季ID', prop: 'SeasonID' },
  { label: '名称', prop: 'Name' },
  {
    label: '状态', prop: 'Enabled', formatter: (row, column, cellValue) => {
      return (row.Enabled !== undefined && row.Enabled !== null) && row.Enabled == '1' ? '正常开启' : '关闭'
    }
  },
]

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("centre/getSeasonList").then(res => {
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
  SeasonID: '',
  Name: '',
  Enabled: '1',
})

const onSubmit = async () => {
  if (isEdit.value && curTab.value == 2) {
    await postInfo("centre/updateSeason", form).then(res => {
    });
  } else {
    const { SeasonID, ...addInfo } = form;
    await postInfo("centre/addSeason", addInfo).then(res => {
    });
  }
  isEdit.value = false;
  curTab.value = '0';
  loadData(currentPage.value);
  onReset();
}

const onReset = () => {
  form.SeasonID = isEdit.value && curTab == "2" ? form.SeasonID : '';
  form.Name = '';
  form.Enabled = '1';
}

const handleEdit = (data) => {
  isEdit.value = true;
  curTab.value = '2';
  form.SeasonID = data.SeasonID;
  form.Name = data.Name;
  form.Enabled = data.Enabled ? '1' : '0';
}

const handleDelete = (data) => {
  ElMessageBox.confirm(
    '确定要删除该数据?',
    '删除确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(async () => {
    await postInfo("centre/delSeason", { SeasonID: [data.SeasonID] }).then(res => {
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
  const ids = rows.map(item => item.SeasonID);
  ElMessageBox.confirm(
    '确定要删除该数据?',
    '删除确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
    postInfo("centre/delSeason", { SeasonID: ids }).then(res => {
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