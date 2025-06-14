<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-form :model="form" label-width="auto">
      <el-form-item>
        <el-form-item :label="$t('所属服务器') + '：'">
          <el-select v-model="form.serverID" style="width:100px;margin-left:-10px;">
            <el-option :label="$t('全部')" value="all" />
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
        <el-form-item :label="$t('动作') + '：'">
          <el-select v-model="form.mode" style="width:100px;margin-left:-10px;">
            <el-option :label="$t('全部')" value="all" />
            <el-option :label="$t('消耗')" value="Sub" />
            <el-option :label="$t('获取')" value="Add" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('角色名') + '：'" style="margin-left:-10px;">
          <el-input v-model="form.roleName" style="width:100px;margin-left:-10px;" />
        </el-form-item>
        <el-form-item :label="$t('武将名') + '：'" style="margin-left:-10px;">
          <el-input v-model="form.heroName" style="width:100px;margin-left:-10px;" />
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
    <el-tab-pane :label="$t('武将明细')">
      <DynamicTable :columns="columns" :data="tableData" :total="total" :current-page="currentPage" :delete-btn="false"
        :operational="false" :selection="false" pagination :loading="isLoading" @page-change="handlePageChange" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useApi } from "~/composables/useApi"
import { exportTable } from '~/composables/exportTable';
import { useStaticStore } from '~/stores/static';
import { ElMessage } from 'element-plus';
import { useSettingStore } from '~/stores/setting';
import { useI18n } from 'vue-i18n';

definePageMeta({
  keepalive: true,  // 必须为需要缓存的页面启用
  title: '武将明细',
});

const settingStore = useSettingStore();
const staticStore = useStaticStore()
const { postMicro, getInfo } = useApi();
const { exportMicroCSV } = exportTable();
const { t } = useI18n();

// 表格数据
const tableData = ref([]);
const serverData = ref([]);
const heroData = ref([]);
const actionData = ref([]);
const total = ref(0);
const curTab = ref('0');
const form = reactive({
  serverID: 'all',
  mode: 'all',
  roleName: '',
  heroName: '',
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
    FullName: form.roleName,
    HeroID: settingStore.getLanguage == 'zh' ? heroData.value.find(hero => hero.Name === form.heroName)?.HeroID || 'all'
      : heroData.value.find(hero => hero.JP_Name === form.heroName)?.HeroID || 'all',
    Mode: form.mode,
    BeginTime: form.time[0] ? Math.floor(form.time[0].getTime() / 1000) : '0',
    EndTime: form.time[1] ? Math.floor(form.time[1].getTime() / 1000) : '0',
  }
  const getData = await postMicro({ Cmd: "role-hero-log/getInfo", Host: "AnalysisHost", QueryType: "Get", Page: page, ...options });
  tableData.value = getData.data;
  total.value = getData.total;
}

const columns = [
  { label: 'ID', prop: 'HeroLogID' },
  { label: '名称', prop: 'RoleName' },
  {
    label: '武将', prop: 'HeroID', formatter: (row, column, cellValue) => {
      const hero = heroData.value.find(hero => hero.HeroID === row.HeroID);
      return hero ? settingStore.getLanguage == 'zh' ? hero.Name : hero.JP_Name : '未知武将';
    }
  },
  {
    label: '获取/消耗途径', prop: 'ActionTrigger', formatter: (row, column, cellValue) => {
      const action = actionData.value.find(action => action.Action === row.ActionTrigger);
      return action ? settingStore.getLanguage == 'zh' ? action.Name : action.JP_Name : '未知途径';
    }
  },
  {
    label: '获取/消耗', prop: 'Mode', formatter: (row, column, cellValue) => {
      return row.Mode === 'Sub' ? '消耗' : '获取';
    }
  },
  { label: '等级', prop: 'Level' },
  {
    label: '行为时间', prop: 'Time', formatter: (row, column, cellValue) => {
      return formatTime(row, column, cellValue);
    }
  },
  {
    label: '服务器', prop: 'ServerID', formatter: (row, column, cellValue) => {
      const server = serverData.value.find(server => server.server_id === row.ServerID);
      return server ? server.server_name : '未知服务器';
    }
  },
]

onMounted(async () => {
  try {
    isLoading.value = true;
    await postMicro({ Cmd: "role-hero-log/getInfo", Host: "AnalysisHost", QueryType: "Get" }).then((res) => {
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
    // 获取武将相关数据
    heroData.value = staticStore.getSysHeros;
    actionData.value = staticStore.getSysActionDict;
  } catch (error) {
    console.error('获取数据失败:', error);
    // 添加错误处理，确保 seasonData 不会是 undefined
    serverData.value = [{
      server_id: '',
      server_name: '加载失败'
    }];
  } finally {
    console.log('表格数据:', tableData.value);
    console.log('服务器数据:', serverData.value);
  }
});

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
  form.serverID = 'all';
  form.mode = 'all';
  form.roleName = '';
  form.heroName = '';
  form.time = '';
  search();
}

const exportInfo = async () => {
  let writer = null;
  isLoading.value = true;
  const options = {
    ServerID: form.serverID,
    FullName: form.roleName,
    HeroID: settingStore.getLanguage == 'zh' ? heroData.value.find(hero => hero.Name === form.heroName)?.HeroID || 'all'
      : heroData.value.find(hero => hero.JP_Name === form.heroName)?.HeroID || 'all',
    Mode: form.mode,
    BeginTime: form.time[0] ? Math.floor(form.time[0].getTime() / 1000) : '0',
    EndTime: form.time[1] ? Math.floor(form.time[1].getTime() / 1000) : '0',
  };
  await exportMicroCSV({
    Cmd: "role-hero-log/getInfo",
    Host: "AnalysisHost",
    QueryType: "Get",
    Limit: total.value,
    Page: 1,
    ...options
  }, columns, writer, `${t('武将明细')}_${Date.now()}.csv`).catch(async error => {
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