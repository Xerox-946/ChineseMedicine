<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-tab-pane :label="$t('角色列表')">
      <DynamicTable :columns="columns" :data="tableData" :total="total" :current-page="currentPage" selection pagination
        @page-change="handlePageChange" :loading="isLoading" @edit="handleEdit" @delete="handleDelete"
        @delete-all="handleDeleteAll" />
    </el-tab-pane>
    <el-tab-pane :label="$t('添加角色')" v-if="authStore.checkActionPermission('role:add')">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('角色名') + '：'" label-width="140px">
          <el-input v-model="form.RoleName" />
        </el-form-item>
        <el-form-item :label="$t('角色所属') + '：'" label-width="140px">
          <el-select v-model="form.RoleSource">
            <el-option :label="$t('内部管理人员')" :value="0" />
            <el-option :label="$t('联运合作伙伴')" :value="1" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('角色注释') + '：'" label-width="140px">
          <el-input v-model="form.Desc" />
        </el-form-item>
        <el-form-item :label="$t('角色赋权') + '：'" label-width="140px">
          <el-tree ref="treeRef" :data="actionData" show-checkbox node-key="id" :default-expanded-keys="expandedKeys"
            :default-checked-keys="checkedKeys" :props="defaultProps" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{ $t('提交') }}</el-button>
          <el-button @click="onReset">{{ $t('重置') }}</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane :label="$t('角色编辑')" v-if="isEdit && curTab == '2'">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('角色名') + '：'" label-width="140px">
          <el-input v-model="form.RoleName" />
        </el-form-item>
        <el-form-item :label="$t('角色所属') + '：'" label-width="140px">
          <el-select v-model="form.RoleSource">
            <el-option :label="$t('内部管理人员')" :value="0" />
            <el-option :label="$t('联运合作伙伴')" :value="1" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('角色注释') + '：'" label-width="140px">
          <el-input v-model="form.Desc" />
        </el-form-item>
        <div class="custom-tree-node-container">
          <el-form-item :label="$t('角色赋权') + '：'" label-width="140px">
            <el-tree ref="treeRef" :data="actionData" show-checkbox node-key="id" :default-expanded-keys="expandedKeys"
              :default-checked-keys="checkedKeys" :props="defaultProps" />
          </el-form-item>
        </div>
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
import { useI18n } from 'vue-i18n'
import { ElTree } from 'element-plus'
import { useAuthStore } from '~/stores/auth'

const { getInfo, postInfo } = useApi();
const { t } = useI18n();

definePageMeta({
  keepalive: true,  // 必须为需要缓存的页面启用
  title: '角色管理',
});

// 表格数据
const tableData = ref([]);
const total = ref(0);
const authStore = useAuthStore();
const expandedKeys = ref([]);
const checkedKeys = ref([]);
const expectData = reactive({});
const actionData = ref([]);
const curTab = ref('0');
const isEdit = ref(false);
const treeRef = ref(null);
const defaultProps = {
  children: 'children',
  label: (node) => {
    return t(node.action_name);
  },
  class: 'is-penultimate',
}
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
  const getData = await getInfo("centre/getPlayerList", { Page: page });
  tableData.value = getData.data;
  total.value = getData.total;
}

const columns = [
  { label: '角色名', prop: 'RoleName' },
  { label: '角色所属', prop: 'RoleSource', formatter: (row) => row.RoleSource == 0 ? t('内部管理人员') : t('联运合作伙伴') },
  { label: '描述', prop: 'Desc' },
  { label: '添加时间', prop: 'AddTime', formatter: (row) => new Date(row.AddTime * 1000).toLocaleString() },
]

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("centre/getActionInfoList").then(res => {
      actionData.value = res.data;
      expectData.value = res.expectData;
    });
    await getInfo("centre/getPlayerList").then(res => {
      isLoading.value = false;
      tableData.value = res.data;
      total.value = res.total;
    });
  } finally {
    console.log(tableData.value, total.value);
    console.log(actionData.value, expectData.value);
  }
});

const form = reactive({
  RoleName: '',
  RoleSource: 0,
  Desc: '',
});

const onSubmit = async (data) => {
  const { ...formTemp } = form;
  formTemp.ActionList = treeRef.value.getCheckedKeys(false).join(',') + "," + treeRef.value.getHalfCheckedKeys().join(',');
  if (isEdit.value && curTab.value == 2) {
    await postInfo("centre/updatePlayer", formTemp).then(res => {
    });
  } else {
    const { ID, ...addInfo } = formTemp;
    await postInfo("centre/addPlayer", addInfo).then(res => {
    });
  }
  isEdit.value = false;
  curTab.value = '0';
  loadData(currentPage.value);
  onReset();
}

const onReset = () => {
  delete form.ID;
  form.RoleName = '';
  form.RoleSource = 0;
  form.Desc = '';
  treeRef.value.setCheckedKeys([], false);
  expandedKeys.value = [];
  checkedKeys.value = [];
}

const handleEdit = async (data) => {
  isEdit.value = true;
  curTab.value = '2';
  form.RoleName = data.RoleName;
  form.RoleSource = data.RoleSource;
  form.ID = data.ID;
  form.Desc = data.Desc;
  await getInfo("centre/getActionInfoList", { roleID: data.ID }).then(res => {
    expectData.value = res.expectData;
    expandedKeys.value = expectData.value.expandedKeys;
    checkedKeys.value = expectData.value.checkedKeys;
  });
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
    await postInfo("centre/delPlayer", { ID: [data.ID] }).then(res => {
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
  const ids = rows.map(item => item.ID);
  ElMessageBox.confirm(
    '确定要删除该数据?',
    '删除确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
    console.log(ids);
    postInfo("centre/delPlayer", { ID: ids }).then(res => {
      loadData(currentPage.value);
      ElMessage({
        type: 'success',
        message: 'Delete completed',
      });
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

.is-penultimate>.el-tree-node__content {
  color: #626aef;
}

.el-tree-node.is-penultimate>.el-tree-node__children {
  display: flex;
  flex-direction: row;
}

.is-penultimate>.el-tree-node__children>div {
  width: 25%;
}
</style>