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
    <el-tab-pane :label="$t('数据监控[玩家留存率列表]')">
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
  title: '留存统计列表',
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
  isLoading.value = true;
  console.log(page)
  await loadData(page).then(res => {
    isLoading.value = false
  });
  currentPage.value = page;
}

const loadData = async (page) => {
  const options = {
    ServerID: form.serverID,
    GameOperator: form.platID,
    StartDate: form.time[0] ? formatDate(form.time[0]) : '0',
    EndDate: form.time[1] ? formatDate(form.time[1]) : '0',
  }
  const getData = await getInfo("centre/getSurvivalList", { Page: page,...options });
  tableData.value = getData.data;
  total.value = getData.total;
  console.log(tableData.value);
}

const columns = [
  { label:'日期', prop: 'Date' },
  { 
    label:'新增有效用户', prop: '0', formatter: (row, column, cellValue) => {
      if(row['0'] === null) return 0;  
      return row['0'];  
    } 
  },
  { 
    label:'次日留存', prop: '1' ,formatter: (row, column, cellValue) => {
      return formatSurInfo(row, column, cellValue, 1);
    } 
  },
  { 
    label:'三日留存', prop: '2' ,formatter: (row, column, cellValue) => {
      return formatSurInfo(row, column, cellValue, 2);
    } 
  },
  { 
    label:'四日留存', prop: '3' ,formatter: (row, column, cellValue) => {
      return formatSurInfo(row, column, cellValue, 3);
    } 
  },
  { 
    label:'五日留存', prop: '4' ,formatter: (row, column, cellValue) => {
      return formatSurInfo(row, column, cellValue, 4);
    } 
  },
  { 
    label:'六日留存', prop: '5' ,formatter: (row, column, cellValue) => {
      return formatSurInfo(row, column, cellValue, 5);
    } 
  },
  { 
    label:'七日留存', prop: '6' ,formatter: (row, column, cellValue) => {
      return formatSurInfo(row, column, cellValue, 6);
    } 
  },
  { 
    label:'十四日留存', prop: '13' ,formatter: (row, column, cellValue) => {
      return formatSurInfo(row, column, cellValue, 13);
    } 
  },
  { 
    label:'三十日留存', prop: '29' ,formatter: (row, column, cellValue) => {
      return formatSurInfo(row, column, cellValue, 29);
    } 
  },
];

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("centre/getSurvivalList").then((res) => {
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
  }
});

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以需要+1
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
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

const formatSurInfo = (row, column, cellValue, prop) => {
  const today = new Date();
  const dateParts = row.Date.split('-');
  const selectedDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  selectedDate.setDate(selectedDate.getDate() + prop);
  if(!cellValue || cellValue === null||cellValue === undefined){
    if (selectedDate <= today) {
      return '0%';
    }else{
      return '';
    }
  }
  return (cellValue * 100).toFixed(2) + '%';
}

const exportInfo = async () => {
  let writer = null;
  isLoading.value = true;
  const options = {
    ServerID: form.serverID,
    PlatformID: form.platID,
    StartDate: form.time[0] ? formatDate(form.time[0]) : '0',
    EndDate: form.time[1] ? formatDate(form.time[1]) : '0',
  };
  await exportGetCSV('centre/getSurvivalList',{
    Limit: total.value,
    Page: 1,
    ...options
  }, columns, writer, `${t("留存统计")}_${form.platID}_${form.serverID}_${Date.now()}.csv`).catch(async error => {
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