<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-tab-pane :label="$t('系统信件记录')">
      <el-form :model="form" label-width="auto" v-if="curTab == '0'">
        <el-form-item>
          <el-form-item :label="$t('所属服务器') + '：'">
            <el-select v-model="NowServerID" style="width:100px;margin-left:-10px;">
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
          <el-form-item style="margin-left: 10px;">
            <el-button type="primary" @click="search()">{{ $t('查询') }}</el-button>
          </el-form-item>
        </el-form-item>
      </el-form>
      <DynamicTable :columns="columns" :data="tableData" :total="total" :current-page="currentPage" selection pagination
        @page-change="handlePageChange" :loading="isLoading" @delete="handleDelete" :deleteBtn="false"
        @edit="handleEdit" @send="handleSend" :operationalButtons="getOperationButtons" :operationalWidth="230" />
    </el-tab-pane>
    <el-tab-pane :label="$t('发送信件')" v-if="authStore.checkActionPermission('sysMailList:add')">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('邮件标题') + '：'">
          <el-input v-model="form.MailTitle" style="width: 500px;" />
        </el-form-item>
        <el-form-item :label="$t('邮件内容') + '：'">
          <el-input v-model="form.MailContent" type="textarea" style="width: 500px;" />
        </el-form-item>
        <el-form-item :label="$t('活动开始时间') + '：'">
          <el-date-picker v-model="form.StartTime" type="datetime" placeholder="Pick a Date"
            format="YYYY-MM-DD hh:mm:ss" value-format="x" />
        </el-form-item>
        <el-form-item :label="$t('活动结束时间') + '：'">
          <el-date-picker v-model="form.EndTime" type="datetime" placeholder="Pick a Date" format="YYYY-MM-DD hh:mm:ss"
            value-format="x" />
        </el-form-item>
        <el-form-item :label="$t('所属服务器') + '：'">
          <el-checkbox v-model="checkAllServer" :indeterminate="isIndeterminateServer"
            @change="handleCheckAllServerChange">{{ $t('全选') }}</el-checkbox>
          <el-checkbox-group style="margin-left: 30px" v-model="form.ServerID" @change="handleCheckedServerChange">
            <el-checkbox v-for="server in serverData" :key="server.server_id" :value="server.server_id">{{
              $t(server.server_name)
            }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item :label="$t('发送对象') + '：'">
          <el-radio-group v-model="radio" style="display: flex;flex-flow: column nowrap;align-items: flex-start;">
            <el-radio :label="1">{{ $t('全服玩家') }}</el-radio>
            <el-radio :label="2">{{ $t('指定玩家') }}</el-radio>
            <el-input v-model="form.RoleIDs" type='textarea' autosize style="width: 500px;"
              v-if="radio == 2"></el-input>
            <el-text style="margin-left: -340px;" v-if="radio == 2">{{ $t('Tips:多个领主ID换行分隔') }}</el-text>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-for="(item, index) in form.items" :key="index" :label="index === 0 ? $t('附件') + '：' : ''"
          style="margin-bottom: 18px" v-permission="'sysMailList:base'">
          <span v-if="index != 0" style="margin-left:110px"></span>
          <div class="custom-select-with-prepend">
            <div class="el-input-group">
              <div class="el-input-group__prepend">{{ $t('类型:') }}</div>
              <el-select v-model="item.Class" style="width:100px" @change="handleClassChange(index, item.Class)">
                <el-option :label="$t('资源')" value="Coin" />
                <el-option :label="$t('道具')" value="Item" />
                <el-option :label="$t('头像')" value="Avatar" />
                <el-option :label="$t('表情')" value="Emoji" />
              </el-select>
            </div>
          </div>
          <div class="custom-select-with-prepend">
            <div class="el-input-group">
              <div class="el-input-group__prepend">{{ $t('奖励类型:') }}</div>
              <el-select v-model="item.Type" style="width:150px;" filterable>
                <el-option v-for="type in getTypeOptions(item.Class)"
                  :label="settingStore.getLanguage == 'zh' ? type.Name : type.JP_Name"
                  :value="type.Coin || type.ItemID || type.ID" />
              </el-select>
            </div>
          </div>
          <div>
            <el-input v-model="item.Count" placeholder="Please input" type="number" :min="0"
              :disabled="item.Class == 'Avatar' || item.Class == 'Emoji'">
              <template #prepend>{{ $t('道具数量:') }}</template>
              <template #append>
                <el-button type="warn" @click="delItem(index)">{{ $t('删除') }}</el-button>
              </template>
            </el-input>
          </div>
        </el-form-item>
        <div style="margin-left:110px;margin-bottom:20px;" v-permission="'sysMailList:base'">
          <el-button type="primary" @click="addItem">{{ $t('添加奖励项目') }}</el-button>
        </div>
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
import { codeUtil } from "~/composables/codeUtil";
import { useAuthStore } from '~/stores/auth';

const { getInfo, postInfo, postMicro } = useApi();
const { codeRNo, decodeRNo } = codeUtil();
const settingStore = useSettingStore();
const authStore = useAuthStore();
const { t } = useI18n();
definePageMeta({
  keepalive: true,  // 必须为需要缓存的页面启用
  title: '系统信件记录',
});

// 表格数据
const tableData = ref([]);
const serverData = ref([]);
const NowServerID = ref('all');
const staticStore = useStaticStore();
const itemData = ref([]);
const coinData = ref([]);
const avatarData = ref([]);
const emojiData = ref([]);
const total = ref(0);
const curTab = ref('0');
const checkAllServer = ref(false);
const isIndeterminateServer = ref(false);
const radio = ref(1);
const form = reactive({
  MailTitle: '',
  MailContent: '',
  StartTime: '',
  EndTime: '',
  ServerID: [],
  RoleIDs: '',
  items: []
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
  const getData = await getInfo("mail/getMailList", { Page: page });
  tableData.value = getData.data;
  total.value = getData.total;
}

const getOperationButtons = (row) => {
  if (row && row.Status == 1) {
    return [
      { label: '重新编辑', type: 'primary', actionType: 'edit' },
      { label: '删除', type: 'danger', actionType: 'delete' },
    ];
  }
  return [
    { label: '发送', type: 'danger', actionType: 'send' },
    { label: '编辑', type: 'primary', actionType: 'edit' },
    { label: '删除', type: 'danger', actionType: 'delete' }
  ];
}

const columns = [
  { label: '邮件编号', prop: 'ID' },
  { label: '邮件标题', prop: 'MailTitle' },
  { label: '邮件内容', prop: 'MailContent' },
  {
    label: '服务器', prop: 'ServerID', formatter: (row) => {
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
  { label: '玩家', prop: 'RoleIDs' },
  { label: '附件【道具】', prop: 'Reward' },
  {
    label: '发送时间', prop: 'CreateTime', formatter: (row) => {
      return formatTime(Number(row.CreateTime));
    }
  },
  { label: '操作人', prop: 'Creator' },
  {
    label: '状态', prop: 'Status', formatter: (row) => {
      if (row.Status == 1) return '已发送';
      return '未发送';
    }
  },
  {
    label: '发送成功的服务器', prop: 'SuccessSID', formatter: (row) => {
      var serverList = row.SuccessSID.split(',');
      var result = '';
      for (let serverID of serverList) {
        if (serverID === '0') return '全服';
        if (serverData.value.find(item => item.server_id === Number(serverID))) {
          result += (serverData.value.find(item => item.server_id === Number(serverID))?.server_name || '未知') + ",";
        }
      }
      return result.slice(0, -1);
    }
  },
  {
    label: '发送失败的服务器', prop: 'SuccessSID', formatter: (row) => {
      const successServerList = row.SuccessSID.split(',');
      const serverList = row.ServerID.split(',');
      const failedServerList = serverList.filter(serverID => !successServerList.includes(serverID));
      var result = '';
      for (let serverID of failedServerList) {
        if (serverID === '0') return '全服';
        if (serverData.value.find(item => item.server_id === Number(serverID))) {
          result += (serverData.value.find(item => item.server_id === Number(serverID))?.server_name || '未知') + ",";
        }
      }
      return result.slice(0, -1);
    }
  },
];

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("mail/getMailList").then((res) => {
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
    itemData.value = staticStore.getSysItems;
    coinData.value = staticStore.getSysCoins;
    avatarData.value = staticStore.getSysProfiles;
    emojiData.value = staticStore.getSysEmojis;
  } catch (error) {
    console.error('获取数据失败:', error);
    serverData.value = [{
      server_id: '',
      server_name: '加载失败'
    }];
  } finally {
    console.log('表格数据:', tableData.value, total.value);
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
  const { RoleIDs, ServerID, StartTime, EndTime, items, ...addInfo } = form;
  addInfo.StartTime = StartTime / 1000 || 0;
  addInfo.EndTime = EndTime / 1000 || 0;
  const itemList = [];
  const coinMap = {};
  const avatarList = [];
  const emojiList = [];
  var itemInfo = {};
  var facadeInfo = {};
  for (let item of items) {
    switch (item.Class) {
      case 'Item':
        itemList.push([Number(item.Type), Number(item.Count)]);
        break;
      case 'Coin':
        if (item.Type == 'Reservist') {
          cityMap[item.Type] = item.Count;
          continue;
        }
        coinMap[item.Type] = item.Count;
        break;
      case 'Avatar':
        if (!avatarList.includes(item.Type)) {
          avatarList.push(item.Type);
        }
        break;
      case 'Emoji':
        if (!emojiList.includes(item.Type)) {
          emojiList.push(item.Type);
        }
        break;
    }
  }
  if (avatarList.length > 0) {
    facadeInfo['Avatar'] = avatarList;
  }
  if (emojiList.length > 0) {
    facadeInfo['Emoji'] = emojiList;
  }
  if (itemList.length > 0) {
    itemInfo['Item'] = itemList;
  }
  if (Object.keys(coinMap).length !== 0) {
    itemInfo['Coin'] = coinMap;
  }
  if (Object.keys(facadeInfo).length !== 0) {
    itemInfo['Facade'] = facadeInfo;
  }
  addInfo['Reward'] = JSON.stringify(itemInfo);
  if (RoleIDs != "" && radio.value == 2) {
    const temp = RoleIDs.split('\n').map((item) => {
      return decodeRNo(item.trim());
    });
    addInfo["Roles"] = RoleIDs.split('\n').join(',');
    addInfo["RoleIDs"] = temp.join(',');
  } else {
    addInfo["Roles"] = "";
    addInfo["RoleIDs"] = "";
  }
  addInfo.ServerID = ServerID.join(',') || 0;
  if (!form.ID) {
    await postInfo("mail/addMail", addInfo).then(res => {
      ElMessage.success('添加成功！');
    });
  } else {
    await postInfo("mail/updateMail", addInfo).then(res => {
      ElMessage.success('修改成功！');
    });
  }
  curTab.value = '0';
  loadData(currentPage.value);
  onReset();
}

const handleTab = (tab) => {
  onReset();
}

const onReset = () => {
  delete form.ID;
  form.MailTitle = '';
  form.MailContent = '';
  form.StartTime = '';
  form.EndTime = '';
  form.ServerID = [];
  form.RoleIDs = '';
  form.items = [];
  radio.value = 1;
  handleCheckedServerChange([]);
}

const handleEdit = (data) => {
  curTab.value = '1';
  form.ID = data.ID;
  form.RoleIDs = data.RoleIDs;
  form.ServerID = data.ServerID?.split(',').map((item) => Number(item)) || [];
  handleCheckedServerChange(form.ServerID);
  form.StartTime = data.StartDate * 1000;
  form.EndTime = data.EndDate * 1000;
  if (form.RoleIDs == "") {
    radio.value = 1;
  } else {
    radio.value = 2;
  }
  form.MailTitle = data.MailTitle;
  form.MailContent = data.MailContent;
  if (data.Reward == "{}" || data.Reward == null) {
    form.items = [];
    return;
  }
  if (data.Reward == "" || data.Reward == null) return;
  const reward = JSON.parse(data.Reward);
  for (let key in reward) {
    switch (key) {
      case 'Item':
        reward[key].forEach((item, index) => {
          form.items.push({
            Class: 'Item',
            Type: item[0],
            Count: item[1]
          })
        });
        break;
      case 'Coin':
        for (let key1 in reward[key]) {
          form.items.push({
            Class: 'Coin',
            Type: key1,
            Count: reward[key][key1]
          })
        }
        break;
      case 'Facade':
        reward[key]['Avatar'].forEach((item, index) => {
          form.items.push({
            Class: 'Avatar',
            Type: item,
          })
        });
        reward[key]['Emoji'].forEach((item, index) => {
          form.items.push({
            Class: 'Emoji',
            Type: item,
          })
        });
        break;
    }
  }
}

const addItem = () => {
  form.items.push({
    Class: '',
    Type: '',
    Count: ''
  })
}

const delItem = (index) => {
  form.items.splice(index, 1);
}

const handleClassChange = (index, item) => {
  form.items[index].Type = "";
}

const getTypeOptions = (value) => {
  switch (value) {
    case 'Item':
      return itemData.value;
    case 'Coin':
      return coinData.value;
    case 'Avatar':
      return avatarData.value;
    case 'Emoji':
      return emojiData.value;
  }
}

const handleCheckAllServerChange = (val) => {
  form.ServerID = val ? serverData.value.map(item => item.server_id) : []
  isIndeterminateServer.value = false;
}

const handleCheckedServerChange = async (value) => {
  const checkedCount = value.length;
  checkAllServer.value = checkedCount === serverData.value.length;
  isIndeterminateServer.value = checkedCount > 0 && checkedCount < serverData.value.length;
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
    await postInfo("mail/updateMail", { ID: data.ID, IsDel: 1 }).then(res => {
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

const handleSend = (data) => {
  ElMessageBox.confirm(
    '确定要发送该数据?',
    '发送确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(async () => {
    await postMicro({ Cmd: "tendo/mail", Host: "MailHost", QueryType: "Get", ID: data.ID }).then(res => {
      if (res.Code != 0) return ElMessage({ type: 'error', message: res.Msg });
      loadData(currentPage.value);
      ElMessage({
        type: 'success',
        message: 'Send completed',
      });
    });
  }).catch((e) => {
    ElMessage({
      type: 'info',
      message: 'Send canceled',
    })
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

.custom-select-with-prepend {
  display: inline-flex;
  margin-right: 30px;
  height: 30px;
}

.el-input-group {
  display: flex;
}

.el-input-group__prepend {
  background-color: #f5f7fa;
  color: #909399;
  padding: 0 20px;
  border: 1px solid #dcdfe6;
  border-right: 0;
  border-radius: 4px 0 0 4px;
  display: flex;
  align-items: center;
}
</style>