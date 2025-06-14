<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-form :model="form" label-width="auto">
      <el-form-item>
        <el-form-item :label="$t('所属平台') + '：'">
          <el-select v-model="form.platID" style="width:100px;">
            <el-option :label="$t('全部')" value="0" />
            <el-option v-for="plat in platData" :label="$t(plat.name)"
              :value="plat.platform_id" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('所属服务器') + '：'" style="margin-left:20px">
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
        <el-form-item :label="$t('时间') + '：'" style="margin-left:-40px;">
          <el-date-picker v-model="form.time" type="daterange" unlink-panels range-separator="To"
            start-placeholder="Start date" end-placeholder="End date" style="margin-left:-10px;" :shortcuts="shortcuts"
            :size="size" />
        </el-form-item>
        <el-form-item style="margin-left: 10px;">
          <el-button type="primary" @click="search()">{{ $t('查询') }}</el-button>
        </el-form-item>
        <el-form-item style="margin-left: 10px;">
          <el-button type="primary" @click="resetSearch()">{{ $t('撤销查询') }}</el-button>
        </el-form-item>
        <el-form-item style="margin-left: 10px;">
          <el-button type="primary" @click="exportInfo()">{{ $t('导出查询结果') }}</el-button>
        </el-form-item>
      </el-form-item>
    </el-form>
    <el-tab-pane :label="$t('付费明细')">
      <DynamicTable :columns="columns" :data="tableData" :total="total" :current-page="currentPage" :delete-btn="false"
        :operational="false" :selection="false" pagination :loading="isLoading" @page-change="handlePageChange" :showFooterDesc="showFooterDesc"/>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useApi } from "~/composables/useApi"
import { useI18n } from 'vue-i18n'
import { exportTable } from '~/composables/exportTable';

const { getInfo } = useApi();
const { t } = useI18n();
const { exportGetCSV } = exportTable();

definePageMeta({
  keepalive: true,  // 必须为需要缓存的页面启用
  title: '付费明细',
});

// 表格数据
const tableData = ref([]);
const serverData = ref([]);
const platData = ref([]);
const total = ref(0);
const showFooterDesc = ref('');
const curTab = ref('0');
const form = reactive({
  serverID: '0',
  platID: '0',
  time: '',
});
const currentPage = ref(1);
const isLoading = ref(false);
const handlePageChange = async (page) => {
  isLoading.value = true
  await loadData(page).then(res => {
    isLoading.value = false
  });
  currentPage.value = page;
}

const loadData = async (page) => {
  const options = {
    ServerID: form.serverID,
    GameOperator: form.platID,
    StartTime: form.time[0] ? Math.floor(form.time[0].getTime() / 1000) : '0',
    EndTime: form.time[1] ? Math.floor(form.time[1].getTime() / 1000) : '0',
  }
  const getData = await getInfo("centre/getOrderInfoList", { Page: page,...options });
  tableData.value = getData.data;
  total.value = getData.total;
  await loadFooterDesc();
}

const columns = [
  { 
    label:'服务器', prop: 'ServerID', formatter: (row, column, cellValue) => {
      const server = serverData.value.find(server => server.server_id === row.ServerID);
      return server? server.server_name : '未知服务器';
    } 
  },
  { label:'领主ID', prop: 'RNo' },
  { label:'角色名', prop: 'RoleName' },
  { label:'订单号', prop: 'PayOrderID' },
  {
    label:'付费时间', prop: 'Time', formatter: (row, column, cellValue) => {
      return formatTime(row, column, cellValue);
    }
  },
  { label:'付费金额', prop:'Amount' },
  { 
    label:'类型', prop:'Type', formatter: (row, column, cellValue) => {
      return row.Type === "Charge"? '充值' : row.Type ==='Month1'?'大月卡':'小月卡';
    } 
  },
  { 
    label:'平台', prop:'GameOperator', formatter: (row, column, cellValue) => {
      const plat = platData.value.find(plat => plat.platform_id ==row.GameOperator);
      return plat? plat.name : '未知平台';
    }
  },
]

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("centre/getOrderInfoList").then((res) => {
      isLoading.value = false;
      tableData.value = res.data;
      total.value = res.total;
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
    await loadFooterDesc();
  }
});

const loadFooterDesc = async() => {
  const amountTotal = tableData.value.reduce((acc, item) => acc + item.Amount, 0);
  showFooterDesc.value = t('数据汇总')+":"+t('付费总额[元]')+":"
    +'<span style="background: red">'+amountTotal+'</span>'
}

const formatTime = (row, column, cellValue) => {
  if (!row.Time) {
    return '';
  }
  const date = new Date(row.Time * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

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

const exportInfo = async () => {
  let writer = null;
  isLoading.value = true;
  const options = {
    ServerID: form.serverID,
    GameOperator: form.platID,
    StartTime: form.time[0] ? Math.floor(form.time[0].getTime() / 1000) : '0',
    EndTime: form.time[1] ? Math.floor(form.time[1].getTime() / 1000) : '0',
  };
  await exportGetCSV('centre/getOrderInfoList',{
    Limit: total.value,
    Page: 1,
    ...options
  }, columns, writer, `${t('付费明细')}_${Date.now()}.csv`).catch(async error => {
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