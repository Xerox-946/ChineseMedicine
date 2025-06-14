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
        <el-form-item style="margin-left: 10px;">
          <el-button type="primary" @click="search()">{{ $t('查询') }}</el-button>
        </el-form-item>
      </el-form-item>
    </el-form>
    <el-tab-pane :label="$t('全服付费一览')">
      <DynamicTable :columns="columns" :data="tableData" :total="total" :current-page="currentPage" :delete-btn="false"
        :operational="false" selection pagination :loading="isLoading" @page-change="handlePageChange" :showFooterDesc="showFooterDesc" />
      </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useApi } from "~/composables/useApi"
import { useI18n } from 'vue-i18n'

const { getInfo } = useApi();
const { t } = useI18n();

definePageMeta({
  keepalive: true,  // 必须为需要缓存的页面启用
  title: '全服付费一览',
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
  }
  const getData = await getInfo("centre/getOrderTotalInfo", { Page: page,...options });
  tableData.value = getData.data;
  total.value = getData.total;
  await loadFooterDesc();
}

const columns = [
  {label:'服务器名', prop: 'ServerName'},
  {
    label:'开服时间', prop: 'StartTime', formatter: (row, column, cellValue) => {
      return formatTime(row, column, cellValue);
    }
  },
  { label:'注册用户', prop:'RegNums' },
  { label:'累计付费', prop:'TotalAmount' },
  { label:'LTV', prop:'LTV', formatter: (row, column, cellValue) => {
      return row.LTV?.toFixed(4)||0.00;
    }
  },
  { label:'其他服玩家在本服充值', prop:'GunFuAmount' },
  { label:'本服玩家在其他服充值', prop:'OutFuAmount' },
  { label:'日平均付费', prop:'AvgAmount', formatter: (row, column, cellValue) => {
      return row.AvgAmount?.toFixed(4)||0.00;
    }
  },
  { label:'本月付费', prop:'MonthAmount' },
  { label:'昨日付费', prop:'YesterdayAmount' },
  { label:'今日付费', prop:'TodayAmount' },
  { label:'较前一日浮动', prop:'RemainPer' },
]

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("centre/getOrderTotalInfo").then((res) => {
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
    const monthAmountTotal = tableData.value.reduce((acc, item) => acc + item.MonthAmount, 0);
    const todayAmountTotal = tableData.value.reduce((acc, item) => acc + item.TodayAmount, 0);
    const yesterdayAmountTotal = tableData.value.reduce((acc, item) => acc + item.YesterdayAmount, 0);
    const remianPer = (todayAmountTotal - yesterdayAmountTotal) / yesterdayAmountTotal * 100;
    showFooterDesc.value = t('数据汇总')+":"+t('付费总额[元]')+":"
    +'<span style="background: red">'+amountTotal+'</span>'
    +t('本月付费')+":"+'<span style="background: red">'+monthAmountTotal+'</span>'
    +t('昨日付费')+":"+'<span style="background: red">'+yesterdayAmountTotal+'</span>'
    +t('今日付费')+":"+'<span style="background: red">'+todayAmountTotal+'</span>'
    +t('较前一日浮动')+":"+(remianPer>0?'<span style="background: red">'+remianPer.toFixed(2)+'</span>':'<span style="background: red">0</span>')+"%";
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

const search = async () => {
  isLoading.value = true;
  await loadData(1).then(res => {
    isLoading.value = false;
    currentPage.value = 1;
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