<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-form :model="form" label-width="auto" v-if="curTab == '0'">
      <el-form-item>
        <el-form-item :label="$t('key码类别') + '：'">
          <el-select v-model="type" style="width:100px;">
            <el-option :label="$t('全部')" value="Z" />
            <el-option v-for="type in typeList" :label="type + '类'" :value="type" />
          </el-select>
        </el-form-item>
        <el-form-item style="margin-left: 10px;">
          <el-button type="primary" @click="search()">{{ $t('查询') }}</el-button>
        </el-form-item>
      </el-form-item>
    </el-form>
    <el-tab-pane :label="$t('KEY码类别管理')">
      <DynamicTable :columns="columns" @operation="handleTableLinkClick" :data="tableData" :total="total"
        :current-page="currentPage" :delete-btn="false" :operational="false" :selection="true" pagination
        :loading="isLoading" @page-change="handlePageChange" />
    </el-tab-pane>
    <el-tab-pane :label="$t('KEY码类别添加')" v-permission="'keyClass:add'">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('Key码类别名称') + '：'">
          <el-input v-model="form.key_class" />
        </el-form-item>
        <el-form-item v-for="(item, index) in form.items" :key="index" :label="index === 0 ? $t('key码包含礼包') + '：' : ''"
          style="margin-bottom: 18px">
          <span v-if="index != 0" style="margin-left:120px"></span>
          <el-select v-model="item.Class" style="width:100px" @change="handleClassChange(index, item.Class)">
            <el-option :label="$t('资源')" value="Coin" />
            <el-option :label="$t('道具')" value="Item" />
          </el-select>
          <el-select v-model="item.Type" style="width:150px; margin-left: 10px">
            <el-option v-for="type in getTypeOptions(item.Class)"
              :label="settingStore.getLanguage == 'zh' ? type.Name : type.JP_Name" :value="type.Coin || type.ItemID" />
          </el-select>
          <div style="margin-left: 100px">
            <el-input v-model="item.Count" placeholder="Please input" type="number" :min="0">
              <template #prepend>{{ $t('道具数量:') }}</template>
              <template v-if="index != 0 && form.items.length > 1" #append>
                <el-button type="warn" @click="delItem(index)">{{ $t('删除') }}</el-button>
              </template>
            </el-input>
          </div>
        </el-form-item>
        <div style="margin-left:120px;margin-bottom:20px">
          <el-button type="primary" @click="addItem">{{ $t('添加礼包项目') }}</el-button>
        </div>
        <el-form-item :label="$t('所属服务器') + '：'">
          <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">{{ $t('全选')
          }}</el-checkbox>
          <el-checkbox-group style="margin-left: 30px" v-model="form.serverIDs" @change="handleCheckedServerChange">
            <el-checkbox v-for="server in serverData" :key="server.server_id" :label="server.server_id">{{
              $t(server.server_name)
            }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item :label="$t('key码类型') + '：'">
          <el-select v-model="form.class">
            <el-option v-for="type in typeList" :label="type + $t('类型:') + $t(typeDesc[type])" :value="type" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('状态') + '：'">
          <el-switch v-model="form.status" size="primary" :active-text="$t('启用')" :inactive-text="$t('禁用')" />
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
import { useI18n } from 'vue-i18n'
import { useStaticStore } from '~/stores/static';
import { useSettingStore } from '~/stores/setting';
import { useAuthStore } from '~/stores/auth';

definePageMeta({
  keepalive: true,  // 必须为需要缓存的页面启用
  title: 'KEY码类别管理',
});

const { getInfo, postInfo } = useApi();
const settingStore = useSettingStore();
const authStore = useAuthStore();
const { t } = useI18n();

// 表格数据
const tableData = ref([]);
const serverData = ref([]);
const checkAll = ref(false);
const isIndeterminate = ref(false);
const staticStore = useStaticStore();
const itemData = ref([]);
const coinData = ref([]);
const total = ref(0);
const type = ref('Z');
const curTab = ref('0');
const typeList = ref([]);
const typeDesc = ref({
  'A': '单服单玩家仅可用一次',
  'B': '单服多玩家都可用一次(自定义通码)',
});
const form = reactive({
  items: [
    {
      Class: 'Item',
      Type: 6,
      Count: ''
    }
  ],
  serverIDs: [],
  key_class: '',
  class: 'A',
  status: false
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
    Type: type.value,
  }
  const getData = await getInfo("key/getKeyClassList", { Page: page, ...options });
  tableData.value = getData.data;
  total.value = getData.total;
}

const columns = [
  { label: 'id', prop: 'id' },
  {
    label: '生成时间', prop: 'create_time', formatter: (row) => {
      return formatTime(row.create_time);
    }
  },
  { label: 'Key码类别名称', prop: 'key_class' },
  {
    label: 'key码类别对应礼包', prop: 'reward', formatter: (row) => {
      const reward = JSON.parse(row.reward);
      var result = '';
      var itemResult = '';
      var coinResult = '';
      for (let item in reward) {
        switch (item) {
          case 'Item':
            {
              for (let itemInfo of reward[item]) {
                itemResult += itemData.value.find(item => item.ItemID === Number(itemInfo[0]))?.Name + "*" + itemInfo[1] + ", ";
              }
              break;
            }
          case 'City':
          case 'Coin':
            {
              for (let coinKey in reward[item]) {
                coinData.value
                coinResult += coinData.value.find(coin => coin.Coin === coinKey)?.Name + "*" + reward[item][coinKey] + ", ";
              }
              break;
            }
        }
      }
      result = (itemResult.length > 0 ? '<span style="color: blue;">道具:</span>' : "") + itemResult.slice(0, -2) + '\n' + (coinResult.length > 0 ? '<span style="color: blue;">资源:</span>' : "") + coinResult.slice(0, -2);
      return result;
    }
  },
  {
    label: '适用范围', prop: 'server_id', formatter: (row) => {
      var serverList = row.server_id.split(',');
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
    label: 'KEY码使用类别', prop: 'key_type', formatter: (row) => {
      switch (row.key_type) {
        case "A":
          return row.key_type + ':单服但玩家仅可用一次';
        case "B":
          return row.key_type + ':单服多玩家仅可用一次(自定义通码)';
      }
      return row.key_type;
    }
  },
  {
    label: '状态', prop: 'status', formatter: (row) => {
      return row.status === 1 ? '<span style="color: green;">已启用</span>' : '<span style="color: red;">启用</span>';
    }, linkable: authStore.checkActionPermission('keyClass:enable'),
  },
];

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("key/getKeyClassList").then((res) => {
      isLoading.value = false;
      tableData.value = res.data;
      total.value = res.total;
    });
    // 获取tableData中的key_type，去重并填充到 typeList
    typeList.value = [...new Set(tableData.value.map(item => item.key_type))];
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
    itemData.value = staticStore.getSysItems;
    coinData.value = staticStore.getSysCoins;
  } catch (error) {
    console.error('获取数据失败:', error);
    serverData.value = [{
      server_id: '',
      server_name: '加载失败'
    }];
  } finally {
    console.log('表格数据:', tableData.value);
    console.log('服务器数据:', serverData.value);
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

const onSubmit = async () => {
  var itemInfo = {};
  const itemList = [];
  const coinMap = {};
  const cityMap = {};
  for (let item of form.items) {
    if (item.Class === 'Item') {
      itemList.push([Number(item.Type), Number(item.Count)]);
    }
    if (item.Class === 'Coin') {
      if (item.Type == 'Reservist') {
        cityMap[item.Type] = item.Count;
        continue;
      }
      coinMap[item.Type] = item.Count;
    }
  }
  itemInfo['Item'] = itemList;
  itemInfo['Coin'] = coinMap;
  itemInfo['City'] = cityMap;
  const options = {
    key_class: form.key_class,
    key_type: form.class,
    status: form.status ? 1 : 0,
    server_id: form.serverIDs,
    reward: itemInfo,
  }
  await postInfo("key/addKeyClass", options).then(res => {
  });
  curTab.value = '0';
  loadData(currentPage.value);
  onReset();
}

const onReset = () => {
  form.class = '';
  form.status = false;
  form.serverIDs = [];
  form.key_class = 'A';
  form.items = [
    {
      Class: 'Item',
      Type: 6,
      Count: ''
    }
  ]
}

const addItem = () => {
  form.items.push({
    Class: 'Item',
    Type: 6,
    Count: ''
  })
}

const delItem = (index) => {
  form.items.splice(index, 1);
}

const handleTableLinkClick = async ({ row, prop }) => {
  await postInfo("key/updateKeyClassStatus", {
    ClassID: Number(row.id)
  }).then(res => {
    //更新tableData中的那一条数据
    tableData.value.forEach(item => {
      if (item.id === row.id) {
        item.status = res.status;
      }
    });
  });
}

const handleCheckAllChange = (val) => {
  form.serverIDs = val ? serverData.value.map(item => item.server_id) : []
  isIndeterminate.value = false;
}

const getTypeOptions = (value) => {
  switch (value) {
    case 'Item':
      return itemData.value;
    case 'Coin':
      return coinData.value;
  }
}

const handleCheckedServerChange = (value) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === serverData.value.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < serverData.value.length;
}


const handleClassChange = (index, item) => {
  form.items[index].Type = item == 'Item' ? 6 : "Wood"
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