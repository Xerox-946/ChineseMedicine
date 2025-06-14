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
    <el-tab-pane :label="$t('付费统计')">
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
  title: '付费统计',
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
  const getData = await getInfo("centre/getOrderTotal", { Page: page,...options });
  tableData.value = getData.data;
  total.value = getData.total;
  await loadFooterDesc();
}

const columns = [
  { 
    label:'日期', prop: 'Time',
    formatter: (row, column, cellValue) => {
      const date = new Date(row.Time);
      const weekday = date.getDay();
      const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      const weekdayName = weekdays[weekday];
      return `${row.Time} (${weekdayName})`;
    }
  },
  { label:'付费人数', prop: 'TotalNum' },
  { label:'新增付费人数', prop: 'NewNum' },
  { label:'有偿金购买人数', prop: 'ChargeNum' },
  { label:'大月卡购买人数', prop: 'Month1Num' },
  { label:'小月卡购买人数', prop: 'Month2Num' },
  { label:'其他礼包购买人数', prop: 'OtherNum' },
  { label:'付费总金额', prop: 'TotalAmount' },
  { label:'新增人数付费金额', prop: 'NewAmount' },
  { label:'付费人次', prop: 'TotalCount' },
  { label:'有偿金日ARUP', prop: 'ChargeARUP' },
  { label:'大月卡日ARUP', prop: 'Month1ARUP' },
  { label:'小月卡日ARUP', prop: 'Month2ARUP' },
  { label:'其他礼包日ARUP', prop: 'OtherARUP' },
  { label:'日ARUP', prop: 'ARUP' },
  { label:'付费率', prop: 'BuyPer' },
]

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("centre/getOrderTotal").then((res) => {
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
  const amountTotal = tableData.value.reduce((acc, item) => acc + item.TotalAmount, 0);
  const TotalNum = tableData.value.reduce((acc, item) => acc + item.TotalNum, 0);
  const ARUP = (amountTotal / TotalNum).toFixed(2);
  const ActiveNum = tableData.value.reduce((acc, item) => acc + item.ActiveNums, 0);
  const BuyPer = (TotalNum / ActiveNum * 100).toFixed(2)+'%';
  showFooterDesc.value = t('数据汇总')+":"+t('付费总额[元]')+":"
    +'<span style="background: red">'+amountTotal+'</span>'+
    t('ARUP')+'<span style="background: red">'+ARUP+'</span>'+
    t('付费率')+'<span style="background: red">'+BuyPer+'</span>';
}

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

const exportInfo = async () => {
  let writer = null;
  isLoading.value = true;
  const options = {
    ServerID: form.serverID,
    PlatformID: form.platID,
    StartDate: form.time[0] ? formatDate(form.time[0]) : '0',
    EndDate: form.time[1] ? formatDate(form.time[1]) : '0',
  };
  await exportGetCSV('centre/getOrderTotal',{
    Limit: total.value,
    Page: 1,
    ...options
  }, columns, writer, `${t("付费统计")}_${form.platID}_${form.serverID}_${Date.now()}.csv`).catch(async error => {
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