<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-tab-pane :label="$t('查看当前在线')">
      <DynamicTable :columns="columns" @operation="handleTableLinkClick" :data="tableData" :total="total"
        :current-page="currentPage" :delete-btn="false" :operational="false" :selection="false" pagination
        :loading="isLoading" @page-change="handlePageChange" />
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
  title: '查看当前在线',  // 页面标题
});
// 表格数据
const tableData = ref([]);
const serverData = ref([]);
const platData = ref([]);
const total = ref(0);
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
  const getData = await getInfo("centre/getCurrentOnlineInfo", { Page: page, ...options });
  tableData.value = getData.data;
  total.value = getData.total;
  console.log(tableData.value);
}
onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("centre/getCurrentOnlineInfo").then((res) => {
      console.log(res);
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