<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-tab-pane :label="$t('服务器组列表')">
      <DynamicTable :columns="columns" :data="tableData" :total="total" :current-page="currentPage" selection pagination
        @page-change="handlePageChange" :loading="isLoading" @edit="handleEdit" @delete="handleDelete"
        @delete-all="handleDeleteAll" :delete-btn="authStore.checkActionPermission('groupList:delete')" />
    </el-tab-pane>
    <el-tab-pane :label="$t('添加服务器组')" v-if="authStore.checkActionPermission('groupList:add')">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('名称') + '：'">
          <el-input v-model="form.Name" />
        </el-form-item>
        <el-form-item :label="$t('赛季') + '：'">
          <el-select v-model="form.SeasonID">
            <el-option v-for="season in seasonData" :label="$t(season.Name)" :value="season.SeasonID" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('标识符') + '：'">
          <el-input v-model="form.ServerKey" />
        </el-form-item>
        <el-form-item :label="$t('运行状态') + '：'">
          <el-select v-model="form.Active">
            <el-option :label="$t('开发')" value="dev" />
            <el-option :label="$t('调试')" value="debug" />
            <el-option :label="$t('正式')" value="prod" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('开服时间') + '：'">
          <el-date-picker v-model="form.StartTime" type="datetime" placeholder="Pick a Date"
            format="YYYY-MM-DD hh:mm:ss" value-format="x" />
        </el-form-item>
        <el-form-item :label="$t('关服时间') + '：'">
          <el-date-picker v-model="form.EndTime" type="datetime" placeholder="Pick a Date" format="YYYY-MM-DD hh:mm:ss"
            value-format="x" />
        </el-form-item>
        <el-form-item :label="$t('简要') + '：'">
          <el-input v-model="form.Resume" type="textarea" />
        </el-form-item>
        <el-form-item :label="$t('是否启用') + '：'">
          <el-switch v-model="form.Enabled" />
        </el-form-item>
        <el-form-item :label="$t('维护结束时间') + '：'">
          <el-date-picker v-model="form.RepairTime" type="datetime" placeholder="Pick a Date"
            format="YYYY-MM-DD hh:mm:ss" value-format="x" />
        </el-form-item>
        <el-form-item :label="$t('状态') + '：'">
          <el-select v-model="form.Status">
            <el-option :label="$t('下线')" value="0" />
            <el-option :label="$t('空闲')" value="1" />
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
    <el-tab-pane :label="$t('编辑服务器组')" v-if="isEdit && curTab == '2'">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('服务器组ID') + '：'">
          <el-input v-model="form.ServerGroupID" :disabled="isEdit && curTab == '2'" />
        </el-form-item>
        <el-form-item :label="$t('名称') + '：'">
          <el-input v-model="form.Name" />
        </el-form-item>
        <el-form-item :label="$t('赛季') + '：'">
          <el-select v-model="form.SeasonID">
            <el-option v-for="season in seasonData" :label="$t(season.Name)" :value="season.SeasonID" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('标识符') + '：'">
          <el-input v-model="form.ServerKey" />
        </el-form-item>
        <el-form-item :label="$t('运行状态') + '：'">
          <el-select v-model="form.Active">
            <el-option :label="$t('开发')" value="dev" />
            <el-option :label="$t('调试')" value="debug" />
            <el-option :label="$t('正式')" value="prod" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('开服时间') + '：'">
          <el-date-picker v-model="form.StartTime" type="datetime" placeholder="Pick a Date"
            format="YYYY-MM-DD hh:mm:ss" value-format="x" />
        </el-form-item>
        <el-form-item :label="$t('关服时间') + '：'">
          <el-date-picker v-model="form.EndTime" type="datetime" placeholder="Pick a Date" format="YYYY-MM-DD hh:mm:ss"
            value-format="x" />
        </el-form-item>
        <el-form-item :label="$t('简要') + '：'">
          <el-input v-model="form.Resume" type="textarea" />
        </el-form-item>
        <el-form-item :label="$t('是否启用') + '：'">
          <el-switch v-model="form.Enabled" />
        </el-form-item>
        <el-form-item :label="$t('维护结束时间') + '：'">
          <el-date-picker v-model="form.RepairTime" type="datetime" placeholder="Pick a Date"
            format="YYYY-MM-DD hh:mm:ss" value-format="x" />
        </el-form-item>
        <el-form-item :label="$t('状态') + '：'">
          <el-select v-model="form.Status">
            <el-option :label="$t('下线')" value="0" />
            <el-option :label="$t('空闲')" value="1" />
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
  tabName: 'groupList',  // 相同类型的详情页使用相同name
  title: '服务器组管理'
});
// 表格数据
const tableData = ref([]);
const seasonData = ref([]);
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
  const getData = await getInfo("centre/getServerGroupList", { Page: page });
  tableData.value = getData.data;
  total.value = getData.total;
}

const columns = [
  { label: '服务器组ID', prop: 'ServerGroupID' },
  { label: '名称', prop: 'Name' },
  {
    label: '赛季', prop: 'SeasonID', formatter: (row, column, cellValue) => {
      return formatSeasonName(row, column, cellValue);
    }
  },
  { label: '标识符', prop: 'ServerKey' },
  {
    label: '运行状态', prop: 'Active', formatter: (row, column, cellValue) => {
      return formatActive(row, column, cellValue);
    }
  },
  {
    label: '开服时间', prop: 'StartTime', formatter: (row, column, cellValue) => {
      return formatTime(row, column, cellValue);
    }
  },
  {
    label: '关服时间', prop: 'EndTime', formatter: (row, column, cellValue) => {
      return formatTime(row, column, cellValue);
    }
  },
  {
    label: '状态', prop: 'Status', formatter: (row, column, cellValue) => {
      return formatStatus(row, column, cellValue);
    }
  },
  {
    label: '维护结束时间', prop: 'RepairTime', formatter: (row, column, cellValue) => {
      return formatTime(row, column, cellValue);
    }
  },
  { label: '简要', prop: 'Resume' },
  { label: '标签', prop: 'Flag' },
  {
    label: '是否启用', prop: 'Enabled', formatter: (row, column, cellValue) => {
      return cellValue > 0 ? '是' : '否';
    }
  },
];

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("centre/getServerGroupList").then(res => {
      isLoading.value = false;
      tableData.value = res.data;
      total.value = res.total;
    });
    // 正确获取并填充 seasonData
    const seasonResponse = await getInfo("centre/getSeasonList");
    seasonData.value = seasonResponse.data || [];
    // 如果没有获取到数据，添加一个默认选项
    if (seasonData.value.length === 0) {
      seasonData.value.push({
        SeasonID: '',
        Name: '暂无可选赛季'
      });
    }
  } catch (error) {
    console.error('获取数据失败:', error);
    // 添加错误处理，确保 seasonData 不会是 undefined
    seasonData.value = [{
      SeasonID: '',
      Name: '加载失败'
    }];
  } finally {
    console.log('表格数据:', tableData.value);
    console.log('赛季数据:', seasonData.value);
  }
});

// do not use same name with ref
const form = reactive({
  ServerGroupID: '',
  SeasonID: 1,
  Name: '',
  ServerKey: '',
  Active: 'dev',
  StartTime: '',
  EndTime: '',
  Resume: '',
  Enabled: true,
  RepairTime: '',
  Status: '1',
})

const onSubmit = async () => {
  const { ServerGroupID, Enabled, ...addInfo } = form;
  addInfo['Enabled'] = Enabled ? '1' : '0';
  addInfo['StartTime'] = addInfo['StartTime'] / 1000;
  addInfo['EndTime'] = addInfo['EndTime'] / 1000;
  addInfo['RepairTime'] = addInfo['RepairTime'] / 1000;
  if (isEdit.value && curTab.value == 2) {
    await postInfo("centre/updateServerGroup", { ServerGroupID, ...addInfo }).then(res => {
    });
  } else {
    await postInfo("centre/addServerGroup", addInfo).then(res => {
    });
  }
  isEdit.value = false;
  curTab.value = '0';
  loadData(currentPage.value);
  onReset();
}

const onReset = () => {
  form.ServerGroupID = isEdit.value && curTab == "2" ? form.ServerGroupID : '';
  form.SeasonID = 1;
  form.Active = 'dev';
  form.StartTime = '';
  form.EndTime = '';
  form.Resume = '';
  form.RepairTime = '';
  form.Status = '1';
  form.ServerKey = '';
  form.Name = '';
  form.Enabled = '1';
}

const handleEdit = (data) => {
  isEdit.value = true;
  curTab.value = '2';
  form.ServerGroupID = data.ServerGroupID;
  form.SeasonID = data.SeasonID;
  form.Name = data.Name;
  form.Enabled = data.Enabled > 0 ? true : false;
  form.Resume = data.Resume;
  form.StartTime = data.StartTime * 1000;
  form.EndTime = data.EndTime * 1000;
  form.RepairTime = data.RepairTime * 1000;
  form.Status = String(data.Status);
  form.Active = data.Active;
  form.ServerKey = data.ServerKey;
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
    await postInfo("centre/delServerGroup", { ServerGroupID: [data.ServerGroupID] }).then(res => {
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
  const ids = rows.map(item => item.ServerGroupID);
  ElMessageBox.confirm(
    '确定要删除该数据?',
    '删除确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(() => {
    postInfo("centre/delServerGroup", { ServerGroupID: ids }).then(res => {
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
  switch (row.Status) {
    case 0:
      return '下线';
    case 1:
      return '空闲';
    case 2:
      return '拥挤';
    case 3:
      return '火爆';
    case 4:
      return '维护';
    default:
      break;
  }
}

const formatActive = (row, column, cellValue) => {
  switch (row.Active) {
    case 'dev':
      return '开发服';
    case 'debug':
      return '测试服';
    case 'prod':
      return '正式服';
    default:
      break;
  }
}

const formatSeasonName = (row, column, cellValue) => {
  console.log(row.SeasonID);
  if (!Number.isInteger(row.SeasonID)) {
    return row.SeasonID;
  }
  const season = seasonData.value.find(item => item.SeasonID === row.SeasonID);
  return season ? row.SeasonID + ":" + season.Name : '未知';
}

const formatTime = (row, column, cellValue) => {
  if (!row.StartTime) {
    return '';
  }
  const date = new Date(row.StartTime * 1000);
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