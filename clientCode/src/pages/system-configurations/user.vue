<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-tab-pane :label="$t('用户列表')">
      <DynamicTable :columns="columns" :data="tableData" :total="total" :current-page="currentPage" selection pagination
        @page-change="handlePageChange" :loading="isLoading" @edit="handleEdit" @delete="handleDelete"
        @delete-all="handleDeleteAll" />
    </el-tab-pane>
    <el-tab-pane :label="$t('添加用户')" v-if="authStore.checkActionPermission('user:add')">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('用户名') + '：'">
          <el-input v-model="form.UserName" />
        </el-form-item>
        <el-form-item :label="$t('用户昵称') + '：'">
          <el-input v-model="form.NickName" />
        </el-form-item>
        <el-form-item :label="$t('联系电话') + '：'">
          <el-input v-model="form.Telphone" />
        </el-form-item>
        <el-form-item :label="$t('角色') + '：'">
          <el-select v-model="form.RoleID">
            <el-option v-for="role in roleData" :key="role.ID" :label="$t(role.RoleName)" :value="role.ID" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('密码') + '：'">
          <el-input v-model="form.Password" type="password" placeholder="Please input password" show-password />
        </el-form-item>
        <el-form-item :label="$t('确认密码') + '：'">
          <el-input v-model="form.PasswordConfirm" type="password" placeholder="Please input password again"
            show-password />
        </el-form-item>
        <el-form-item :label="$t('性别') + '：'">
          <el-switch v-model="form.Sex" size="primary" :active-text="$t('男')" :inactive-text="$t('女')" />
        </el-form-item>
        <el-form-item :label="$t('状态') + '：'">
          <el-switch v-model="form.Status" size="primary" :active-text="$t('正常开启')" :inactive-text="$t('失效')" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{ $t('提交') }}</el-button>
          <el-button @click="onReset">{{ $t('重置') }}</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane :label="$t('用户编辑')" v-if="isEdit && curTab == '2'">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('用户名') + '：'">
          <el-input v-model="form.UserName" :disabled="curTab == '2'" />
        </el-form-item>
        <el-form-item :label="$t('用户昵称') + '：'">
          <el-input v-model="form.NickName" />
        </el-form-item>
        <el-form-item :label="$t('联系电话') + '：'">
          <el-input v-model="form.Telphone" />
        </el-form-item>
        <el-form-item :label="$t('角色') + '：'">
          <el-select v-model="form.RoleID">
            <el-option v-for="role in roleData" :key="role.ID" :label="$t(role.RoleName)" :value="role.ID" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('密码') + '：'">
          <el-input v-model="form.Password" type="password" placeholder="Please input password" show-password />
        </el-form-item>
        <el-form-item :label="$t('确认密码') + '：'">
          <el-input v-model="form.PasswordConfirm" type="password" placeholder="Please input password again"
            show-password />
        </el-form-item>
        <el-form-item :label="$t('性别') + '：'">
          <el-switch v-model="form.Sex" size="primary" :active-text="$t('男')" :inactive-text="$t('女')" />
        </el-form-item>
        <el-form-item :label="$t('状态') + '：'">
          <el-switch v-model="form.Status" size="primary" :active-text="$t('正常开启')" :inactive-text="$t('失效')" />
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
  title: '用户列表',
});

// 表格数据
const tableData = ref([]);
const authStore = useAuthStore();
const total = ref(0);
const curTab = ref('0');
const isEdit = ref(false);
const roleData = ref([]);
const currentPage = ref(1);
const checkAll = ref(false);
const isLoading = ref(false);
const isIndeterminate = ref(false);
const handlePageChange = async (page) => {
  isLoading.value = true
  await loadData(page).then(res => {
    isLoading.value = false
  });
  currentPage.value = page;
}

// 数据加载
const loadData = async (page) => {
  const getData = await getInfo("centre/getAdminList", { Page: page });
  tableData.value = getData.data;
  total.value = getData.total;
}

const columns = [
  { label: '用户名', prop: 'UserName' },
  { label: '用户昵称', prop: 'NickName' },
  {
    label: '角色', prop: 'RoleID', formatter: (row) => {
      return roleData.value.find(item => item.ID == row.RoleID).RoleName;
    }
  },
  {
    label: '性别', prop: 'Sex', formatter: (row) => {
      return row.Sex == 1 ? '男' : '女';
    }
  },
  { label: '联系电话', prop: 'Telphone' },
  {
    label: '创建时间', prop: 'Dateline', formatter: (row) => {
      return new Date(row.Dateline * 1000).toLocaleString()
    }
  },
  {
    label: '状态', prop: 'Status', formatter: (row) => {
      return row.Status ? '正常开启' : '失效';
    }
  }
]

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("centre/getPlayerList").then(res => {
      roleData.value = res.data;
    });
    await getInfo("centre/getAdminList").then(res => {
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
  UserName: '',
  NickName: '',
  RoleID: 1,
  PlatformID: [],
  Sex: false,
  Status: false,
  Password: '',
  PasswordConfirm: '',
  Telphone: '',
})

const onSubmit = async () => {
  const { PasswordConfirm, ...formTemp } = form;
  if (formTemp.Password != PasswordConfirm) {
    ElMessage({
      type: 'error',
      message: '两次输入的密码不一致！'
    })
    return;
  }
  formTemp.PlatformID = formTemp.PlatformID.join(',')
  if (isEdit.value && curTab.value == 2) {
    await postInfo("centre/updateAdmin", formTemp).then(res => {
    });
  } else {
    const { ID, ...addInfo } = formTemp;
    await postInfo("centre/addAdmin", addInfo).then(res => {
    });
  }
  isEdit.value = false;
  curTab.value = '0';
  loadData(currentPage.value);
  onReset();
}

const onReset = () => {
  delete form.ID;
  form.UserName = '';
  form.NickName = '';
  form.RoleID = 1;
  form.PlatformID = [];
  form.Sex = false;
  form.Status = false;
  form.Password = '';
  form.PasswordConfirm = '';
  form.Telphone = '';
}

const handleEdit = (data) => {
  isEdit.value = true;
  curTab.value = '2';
  form.ID = data.ID;
  form.UserName = data.UserName;
  form.NickName = data.NickName;
  form.RoleID = data.RoleID;
  form.PlatformID = data.PlatformID.split(',').map(item => item);
  form.Sex = data.Sex;
  form.Status = data.Status;
  form.Password = '';
  form.PasswordConfirm = '';
  form.Telphone = data.Telphone;
  handleCheckedServerChange(form.PlatformID);
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
    if (data.ID == 1) {
      ElMessage({
        type: 'error',
        message: '超级管理员不能删除！'
      })
      return;
    }
    await postInfo("centre/delAdmin", { id: [data.ID] }).then(res => {
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
    postInfo("centre/delAdmin", { id: ids }).then(res => {
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
</style>