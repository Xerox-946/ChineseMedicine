<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-tab-pane :label="$t('服务器列表')">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('所属平台') + '：'">
          <el-select v-model="platID" style="width:100px;">
            <el-option :label="$t('全部')" value="0" />
            <el-option v-for="plat in platData" :label="$t(plat.name)" :value="plat.platform_id" />
          </el-select>
          <el-form-item style="margin-left: 10px;">
            <el-button type="primary" @click="search()">{{ $t('查询') }}</el-button>
          </el-form-item>
        </el-form-item>
      </el-form>
      <DynamicTable :columns="columns" :loading="isLoading" :data="tableData" :total="total" :current-page="currentPage"
        selection pagination @page-change="handlePageChange" @edit="handleEdit" @delete="handleDelete"
        @delete-all="handleDeleteAll" :delete-btn="authStore.checkActionPermission('serverList:delete')"/>
    </el-tab-pane>
    <el-tab-pane :label="$t('添加服务器')" v-if="authStore.checkActionPermission('serverList:add')">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('服务器名') + '：'">
          <el-input v-model="form.server_name" />
        </el-form-item>
        <el-form-item :label="$t('所属平台') + '：'">
          <el-select v-model="form.platform_id">
            <el-option v-for="plat in platData" :label="$t(plat.name)" :value="plat.platform_id" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('服务器组') + '：'">
          <el-select v-model="form.group_id">
            <el-option v-for="group in groupData" :label="$t(group.Name)" :value="group.ServerGroupID" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('简要描述') + '：'">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item :label="$t('状态') + '：'">
          <el-select v-model="form.status">
            <el-option :label="$t('流畅')" value="1" />
            <el-option :label="$t('拥挤')" value="2" />
            <el-option :label="$t('火爆')" value="3" />
            <el-option :label="$t('维护')" value="4" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{ $t('提交') }}</el-button>
          <el-button @click="onReset">{{ $t('重置') }}</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane :label="$t('编辑服务器')" v-if="isEdit && curTab == '2'">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('服务器ID') + '：'">
          <el-input v-model="form.server_id" :disabled="isEdit && curTab == '2'" />
        </el-form-item>
        <el-form-item :label="$t('服务器名') + '：'">
          <el-input v-model="form.server_name" />
        </el-form-item>
        <el-form-item :label="$t('所属平台') + '：'">
          <el-select v-model="form.platform_id">
            <el-option v-for="plat in platData" :label="$t(plat.name)" :value="plat.platform_id" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('服务器组') + '：'">
          <el-select v-model="form.group_id">
            <el-option v-for="group in groupData" :label="$t(group.Name)" :value="group.ServerGroupID" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('简要描述') + '：'">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item :label="$t('状态') + '：'">
          <el-select v-model="form.status">
            <el-option :label="$t('流畅')" value="1" />
            <el-option :label="$t('拥挤')" value="2" />
            <el-option :label="$t('火爆')" value="3" />
            <el-option :label="$t('维护')" value="4" />
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
  title: '服务器管理',
});
// 表格数据
const tableData = ref([]);
const platData = ref([]);
const groupData = ref([]);
const total = ref(0);
const authStore = useAuthStore();
const curTab = ref('0');
const isEdit = ref(false);
const platID = ref('0');
const currentPage = ref(1);
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
  const getData = await getInfo("centre/getServerList", { Page: page, PlatformID: platID.value });
  tableData.value = getData.data;
  total.value = getData.total;
}

const columns = [
  { label: '服务器ID', prop: 'server_id' },
  { label: '服务器名', prop: 'server_name' },
  {
    label: '所属平台', prop: 'platform_id', formatter: (row, column, cellValue) => {
      return formatPlat(row, column, cellValue);
    }
  },
  {
    label: '服务器组', prop: 'group_id', formatter: (row, column, cellValue) => {
      return formatGroup(row, column, cellValue);
    }
  },
  {
    label: '开服时间', prop: 'start_time', formatter: (row, column, cellValue) => {
      return formatTime(row, column, cellValue);
    }
  },
  {
    label: '闭服时间', prop: 'end_time', formatter: (row, column, cellValue) => {
      return formatTime(row, column, cellValue);
    }
  },
  { label: '服务器描述', prop: 'desc' },
  {
    label: '状态', prop: 'status', formatter: (row, column, cellValue) => {
      return formatStatus(row, column, cellValue);
    }
  },
]

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("centre/getServerList").then(res => {
      isLoading.value = false;
      tableData.value = res.data;
      total.value = res.total;
    });
    const platGetData = await getInfo("centre/getPlatformList");
    platData.value = platGetData.data;
    if (platData.value.length === 0) {
      platData.value.push({
        platform_id: '',
        name: '暂无可选赛季'
      });
    }
    const groupGetData = await getInfo("centre/getServerGroupList");
    groupData.value = groupGetData.data;
    if (groupData.value.length === 0) {
      groupData.value.push({
        ServerGroupID: '',
        Name: '暂无可选服务器组'
      });
    }
  } catch (error) {
    console.error('获取数据失败:', error);
    platData.value = [{
      platform_id: '',
      name: '加载失败'
    }];
    console.error('获取数据失败:', error);
    groupData.value = [{
      ServerGroupID: '',
      Name: '加载失败'
    }];
  } finally {
    console.log(tableData.value, total.value);
    console.log(platData.value);
    console.log(groupData.value);
  }
});

// do not use same name with ref
const form = reactive({
  id: '',
  server_id: '',
  server_name: '',
  platform_id: '1',
  group_id: 1,
  desc: '',
  status: '1',
})

const onSubmit = async () => {
  if (isEdit.value && curTab.value == 2) {
    await postInfo("centre/updateServer", form).then(res => {
    });
  } else {
    const { id, ...rest } = form;
    await postInfo("centre/addServer", rest).then(res => {
    });
  }
  isEdit.value = false;
  curTab.value = '0';
  platID.value = '0';
  onReset();
  loadData(currentPage.value);
}

const onReset = () => {
  form.server_id = '';
  form.server_name = '';
  form.platform_id = '1';
  form.group_id = 1;
  form.desc = '';
  form.status = '1';
}

const handleEdit = (data) => {
  form.id = data.id;
  form.server_id = data.server_id;
  form.server_name = data.server_name;
  form.platform_id = String(data.platform_id);
  form.group_id = data.group_id;
  form.desc = data.desc;
  form.status = String(data.status);
  isEdit.value = true;
  curTab.value = '2';
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
    await postInfo("centre/delServer", { id: [data.server_id] }).then(res => {
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
  const ids = rows.map(item => item.server_id);
  ElMessageBox.confirm(
    '确定要删除该数据?',
    '删除确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
    postInfo("centre/delServer", { id: ids }).then(res => {
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

const formatStatus = (row, column, cellValue) => {
  return Number(row.status) == 1 ? '运行中' : '已停止'
}

const formatGroup = (row, column, cellValue) => {
  return groupData.value.find(item => item.ServerGroupID == Number(row.group_id))?.Name || '加载失败'
}

const formatPlat = (row, column, cellValue) => {
  return platData.value.find(item => item.platform_id == Number(row.platform_id))?.name || '加载失败'
}

const formatTime = (row, column, cellValue) => {
  if (!row.start_time) {
    return '';
  }
  const date = new Date(row.start_time * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const handleTab = (tab) => {
  onReset();
}

const search = async () => {
  await getInfo("centre/getServerList", { platform_id: platID.value }).then(res => {
    tableData.value = res.data;
    total.value = res.total;
  });
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