<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-form :model="form" label-width="auto">
      <el-form-item>
        <el-form-item :label="$t('时间') + '：'" >
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
    <el-tab-pane :label="$t('全服付费统计')">
      <DynamicTable :columns="columns" :data="tableData" :total="total" :current-page="currentPage" :delete-btn="false"
        :operational="false" :selection="false" pagination :loading="isLoading" @page-change="handlePageChange" :showFooterDesc="showFooterDesc"/>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useApi } from "~/composables/useApi";
import { useI18n } from 'vue-i18n';
import { exportTable } from '~/composables/exportTable';

const { getInfo } = useApi();
const { t } = useI18n();
const { exportGetCSV } = exportTable();

definePageMeta({
  keepalive: true,  // 必须为需要缓存的页面启用
  title: '全服付费统计',
});

// 表格数据
const tableData = ref([]);
const total = ref(0);
const showFooterDesc = ref('');
const curTab = ref('0');
const form = reactive({
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
  { label:'有偿金购买人数', prop: 'ChargeNum' },
  { label:'大月卡购买人数', prop: 'Month1Num' },
  { label:'小月卡购买人数', prop: 'Month2Num' },
  { label:'付费总金额', prop: 'TotalAmount' },
  { label:'付费人次', prop: 'TotalCount' },
]

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("centre/getOrderTotal").then((res) => {
      isLoading.value = false;
      tableData.value = res.data;
      total.value = res.total;
    });
  } catch (error) {
    console.error('获取数据失败:', error);
  } finally {
    console.log('表格数据:', tableData.value);
    isLoading.value = false;
    await loadFooterDesc();
  }
});

const loadFooterDesc = async() => {
  const amountTotal = tableData.value.reduce((acc, item) => acc + item.TotalAmount, 0);
  showFooterDesc.value = t('数据汇总')+":"+t('付费总额[元]')+":"
    +'<span style="background: red">'+amountTotal+'</span>';
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
  form.time = '';
  search();
}

const exportInfo = async () => {
  let writer = null;
  isLoading.value = true;
  const options = {
    StartDate: form.time[0] ? formatDate(form.time[0]) : '0',
    EndDate: form.time[1] ? formatDate(form.time[1]) : '0',
  };
  await exportGetCSV('centre/getOrderTotal',{
    Limit: total.value,
    Page: 1,
    ...options
  }, columns, writer, `${t("全服付费统计")}_${Date.now()}.csv`).catch(async error => {
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