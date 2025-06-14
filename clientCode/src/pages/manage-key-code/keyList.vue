<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-form :model="form" label-width="auto" v-if="curTab == '0'">
      <el-form-item>
        <el-form-item :label="$t('key码类别') + '：'">
          <el-select v-model="form.class" style="width:100px;">
            <el-option :label="$t('全部')" value="0" />
            <el-option v-for="keyClass in keyClassData" :label="keyClass.key_class" :value="keyClass.id"
              :disabled='!keyClass.status' />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('KEY码') + '：'" style="margin-left:0px;">
          <el-input v-model="form.code" style="width:100px;" />
        </el-form-item>
        <el-form-item :label="$t('适用范围') + '：'">
          <el-select v-model="form.serverID" style="width:100px;">
            <el-option :label="$t('全部')" value="0" />
            <el-option-group :label="$t('运行中')">
              <el-option v-for="server in serverData" v-show="server.status > 0" :label="server.server_name"
                :value="server.server_id" />
            </el-option-group>
            <el-option-group :label="$t('已下线')">
              <el-option v-for="server in serverData" v-show="server.status <= 0" :label="server.server_name"
                :value="server.server_id" />
            </el-option-group>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('key码使用时间') + '：'" style="margin-left:10px;">
          <el-date-picker v-model="form.time" type="datetimerange" range-separator="To" start-placeholder="Start date"
            end-placeholder="End date" />
        </el-form-item>
        <el-form-item style="margin-left: 10px;">
          <el-button type="primary" @click="search()">{{ $t('查询') }}</el-button>
        </el-form-item>
        <el-form-item style="margin-left: 10px;">
          <el-button type="primary" @click="resetSearch()">{{ $t('撤销查询') }}</el-button>
        </el-form-item>
        <el-form-item style="margin-left: 10px;" v-permission="'keyList:export'">
          <el-button type="primary" @click="exportInfo()">{{ $t('导出查询结果') }}</el-button>
        </el-form-item>
      </el-form-item>
    </el-form>
    <el-tab-pane :label="$t('KEY码列表')">
      <DynamicTable :columns="columns" @operation="handleTableLinkClick" :data="tableData" :total="total"
        :current-page="currentPage" :delete-btn="false" :operational="false" :selection="true" pagination
        :loading="isLoading" @page-change="handlePageChange" />
    </el-tab-pane>
    <el-tab-pane :label="$t('KEY码生成')" v-if="authStore.checkActionPermission('keyList:add')">
      <el-form :model="Aform" label-width="auto">
        <el-form-item :label="$t('key码类别') + '：'">
          <el-select v-model="Aform.ClassID">
            <el-option v-for="keyClass in keyClassData" :label="keyClass.key_class" :value="keyClass.id"
              v-show='keyClass.key_type == "A"' :disabled='!keyClass.status' />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('生成数量') + '：'">
          <el-input v-model="Aform.Num" />
        </el-form-item>
        <el-form-item :label="$t('启用时间') + '：'">
          <el-date-picker v-model="Aform.StartTime" type="datetime" placeholder="Pick a Date"
            format="YYYY-MM-DD hh:mm:ss" value-format="x" />
        </el-form-item>
        <el-form-item :label="$t('失效时间') + '：'">
          <el-date-picker v-model="Aform.EndTime" type="datetime" placeholder="Pick a Date" format="YYYY-MM-DD hh:mm:ss"
            value-format="x" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onASubmit">{{ $t('提交并导出') }}</el-button>
          <el-button @click="onAReset">{{ $t('重置') }}</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane :label="$t('设置自定义通码')" v-if="authStore.checkActionPermission('keyList:addFree')">
      <el-form :model="Bform" label-width="auto">
        <el-form-item :label="$t('请填写key码') + '：'">
          <el-input v-model="Bform.Code" />
        </el-form-item>
        <el-form-item :label="$t('key码类别') + '：'">
          <el-select v-model="Bform.ClassID">
            <el-option v-for="keyClass in keyClassData" :label="keyClass.key_class" :value="keyClass.id"
              v-show='keyClass.key_type == "B"' :disabled='!keyClass.status' />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('启用时间') + '：'">
          <el-date-picker v-model="Bform.StartTime" type="datetime" placeholder="Pick a Date"
            format="YYYY-MM-DD hh:mm:ss" value-format="x" />
        </el-form-item>
        <el-form-item :label="$t('失效时间') + '：'">
          <el-date-picker v-model="Bform.EndTime" type="datetime" placeholder="Pick a Date" format="YYYY-MM-DD hh:mm:ss"
            value-format="x" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onBSubmit">{{ $t('提交') }}</el-button>
          <el-button @click="onBReset">{{ $t('重置') }}</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useApi } from "~/composables/useApi"
import { useI18n } from 'vue-i18n'
import { exportTable } from '~/composables/exportTable';
import { useAuthStore } from '~/stores/auth';

definePageMeta({
  keepalive: true,  // 必须为需要缓存的页面启用
  title: 'KEY码列表',
});

const { getInfo, postInfo } = useApi();
const { t } = useI18n();
const { exportGetCSV } = exportTable();

// 表格数据
const tableData = ref([]);
const serverData = ref([]);
const authStore = useAuthStore();
const keyClassData = ref([]);
const platData = ref([]);
const total = ref(0);
const curTab = ref('0');
const form = reactive({
  serverID: '0',
  class: '0',
  code: '',
  time: '',
});
const Aform = reactive({
  ClassID: '',
  Num: '',
  StartTime: '',
  EndTime: ''
});
const Bform = reactive({
  ClassID: '',
  Code: '',
  StartTime: '',
  EndTime: ''
});
const currentPage = ref(1);
const isLoading = ref(false);
const handlePageChange = async (page) => {
  isLoading.value = true;
  await loadData(page).then(res => {
    isLoading.value = false
  });
  currentPage.value = page;
}

const loadData = async (page) => {
  const options = {
    ServerID: form.serverID,
    Class: form.class,
    Code: form.code,
    StartTime: form.time[0] ? new Date(form.time[0]).getTime() : '0',
    EndTime: form.time[1] ? new Date(form.time[1]).getTime() : '0',
  }
  if (form.time[0] == null && form.time[1] == null) {
    delete options.StartTime;
    delete options.EndTime;
  }
  const getData = await getInfo("key/getKeyList", { Page: page, ...options });
  tableData.value = getData.data;
  total.value = getData.total;
}

const columns = [
  { label: 'KEY码', prop: 'key_code' },
  {
    label: 'key码类别', prop: 'key_class_id', formatter: (row) => {
      return keyClassData.value.find(item => item.id === row.key_class_id)?.key_class || '未知';
    }
  },
  {
    label: '适用范围', prop: 'ServerID', formatter: (row) => {
      var serverList = row.ServerID.split(',');
      var result = '';
      for (let serverID of serverList) {
        if (serverID === '0' || serverID === '') return '全服';
        if (serverData.value.find(item => item.server_id === Number(serverID))) {
          result += (serverData.value.find(item => item.server_id === Number(serverID))?.server_name || '未知') + ",";
        }
      }
      return result.slice(0, -1);
    }
  },
  {
    label: 'key码启用时间', prop: 'start_time', formatter: (row) => {
      return row.start_time.replace('T', ' ').replace('Z', '').slice(0, -4);
    }
  },
  {
    label: 'key码失效时间', prop: 'end_time', formatter: (row) => {
      return row.end_time.replace('T', ' ').replace('Z', '').slice(0, -4);
    }
  },
  {
    label: '创建时间', prop: 'create_time', formatter: (row) => {
      return formatTime(row.create_time);
    }
  },
  {
    label: '状态', prop: 'status', formatter: (row) => {
      return row.status === 1 ? '已失效' : '已启用';
    }, linkStyle: 'custom-info'
  },
  { label: 'key码使用玩家', prop: 'UsedID' },
  { label: 'key码使用次数', prop: "limit" },
  {
    label: 'key码使用时间', prop: 'UsedTime', formatter: (row) => {
      return formatTime(row.UsedTime);
    }
  },
];

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("key/getKeyList").then((res) => {
      isLoading.value = false;
      tableData.value = res.data;
      total.value = res.total;
    });
    await getInfo("key/getKeyClassList").then((res) => {
      keyClassData.value = res.data || [];
    });
    // 正确获取并填充 serverData
    const serverList = await getInfo("centre/getServerList");
    serverData.value = serverList.data || [];
    // 如果没有获取到数据，添加一个默认选项
    if (serverData.value.length === 0) {
      serverData.value.push({
        server_id: '',
        server_name: '加载失败'
      });
    }
    const platList = await getInfo("centre/getPlatformList");
    platData.value = platList.data || [];
    // 如果没有获取到数据，添加一个默认选项
    if (platData.value.length === 0) {
      platData.value.push({
        plat_id: '',
        plat_name: '加载失败'
      });
    }
  } catch (error) {
    console.error('获取数据失败:', error);
    serverData.value = [{
      server_id: '',
      server_name: '加载失败'
    }];
    platData.value = [{
      plat_id: '',
      plat_name: '加载失败'
    }];
  } finally {
    console.log('表格数据:', tableData.value);
    console.log('服务器数据:', serverData.value);
    console.log('平台数据:', platData.value);
    isLoading.value = false;
  }
});

const search = async () => {
  isLoading.value = true;
  await loadData(1).then(res => {
    isLoading.value = false;
    currentPage.value = 1;
  });
}

const resetSearch = () => {
  form.serverID = '0';
  form.platID = '0';
  form.time = '';
  search();
}

const formatTime = (Time) => {
  if (!Time) {
    return '';
  }
  const date = new Date(Time * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const onASubmit = async () => {
  const { ...addInfo } = Aform;
  addInfo['StartTime'] = addInfo['StartTime'] / 1000;
  addInfo['EndTime'] = addInfo['EndTime'] / 1000;
  await postInfo("key/addAKey", addInfo).then(res => {
  });
  curTab.value = '0';
  loadData(currentPage.value);
  onAReset();
}

const onAReset = () => {
  Aform.ClassID = '';
  Aform.Num = '';
  Aform.StartTime = 0;
  Aform.EndTime = 0;
}

const onBSubmit = async () => {
  const { ...addInfo } = Bform;
  addInfo['StartTime'] = addInfo['StartTime'] / 1000;
  addInfo['EndTime'] = addInfo['EndTime'] / 1000;
  await postInfo("key/addBKey", addInfo).then(res => {
  });
  curTab.value = '0';
  loadData(currentPage.value);
  onBReset();
}

const onBReset = () => {
  Bform.ClassID = '';
  Bform.Code = '';
  Bform.StartTime = 0;
  Bform.EndTime = 0;
}

const exportInfo = async () => {
  let writer = null;
  isLoading.value = true;
  const options = {
    ServerID: form.serverID,
    Class: form.class,
    Code: form.code,
    StartTime: form.time[0] ? new Date(form.time[0]).getTime() : '0',
    EndTime: form.time[1] ? new Date(form.time[1]).getTime() : '0',
  };

  await exportGetCSV('key/getKeyList', {
    Limit: total.value,
    Page: 1,
    ...options
  }, columns, writer, `${t("消费数据")}_${Date.now()}.csv`).catch(async error => {
    console.error(`${t('导出失败')}:`, error);
    ElMessage.error(`${t('导出失败')}: ${error.message}`);
    try {
      await writer?.abort();
    } catch (abortError) {
      console.warn(`${t('流中止错误')}:`, abortError);
    }
  }).finally(async () => {
    isLoading.value = false;
    try {
      await writer?.close();
    } catch (closeError) {
      console.warn(`${t("流关闭错误")}:`, closeError);
    }
  })
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