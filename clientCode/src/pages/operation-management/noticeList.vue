<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-tab-pane :label="$t('公告列表')">
      <DynamicTable :columns="columns" :data="tableData" :total="total" :current-page="currentPage" selection pagination
        @page-change="handlePageChange" :loading="isLoading" @delete="handleDelete" :deleteBtn="false"
        @edit="handleEdit" @send="handleSend" @resend="handleResend" :operationalButtons="getOperationButtons"
        :operationalWidth="330" />
    </el-tab-pane>
    <el-tab-pane :label="$t('发公告')" v-if="authStore.checkActionPermission('noticeList:add')">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('标题') + '：'">
          <el-input v-model="form.Title" />
        </el-form-item>
        <el-form-item :label="$t('内容') + '：'">
          <QuillEditor ref="quillEditorRef" :value="form.Content" @updateValue="getMsg" />
        </el-form-item>
        <el-form-item :label="$t('开始时间') + '：'">
          <el-date-picker v-model="form.StartTime" type="datetime" placeholder="Pick a Date"
            format="YYYY-MM-DD hh:mm:ss" value-format="x" />
        </el-form-item>
        <el-form-item :label="$t('结束时间') + '：'">
          <el-date-picker v-model="form.EndTime" type="datetime" placeholder="Pick a Date" format="YYYY-MM-DD hh:mm:ss"
            value-format="x" />
        </el-form-item>
        <el-form-item :label="$t('强制弹窗') + '：'">
          <el-switch v-model="form.Force" size="primary" :active-text="$t('是')" :inactive-text="$t('否')" />
        </el-form-item>
        <el-form-item :label="$t('是否启用') + '：'">
          <el-switch v-model="form.Enabled" size="primary" :active-text="$t('是')" :inactive-text="$t('否')" />
        </el-form-item>
        <el-form-item :label="$t('排序') + '：'">
          <el-input v-model="form.Order" />
        </el-form-item>
        <el-form-item :label="$t('类型') + '：'">
          <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">{{ $t('全选')
          }}</el-checkbox>
          <el-checkbox-group style="margin-left: 30px" v-model="form.Type" @change="handleCheckedChange">
            <el-checkbox :label="1" :key="1">{{ $t('网关公告') }}</el-checkbox>
            <el-checkbox :label="2" :key="2">{{ $t('游戏内公告') }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item :label="$t('所属服务器') + '：'" v-if='form.Type.includes(2)' style="border:1px solid">
          <el-checkbox v-model="checkAllServer" :indeterminate="isIndeterminateServer"
            @change="handleCheckAllServerChange">{{ $t('全选') }}</el-checkbox>
          <el-checkbox-group style="margin-left: 30px" v-model="form.ServerID" @change="handleCheckedServerChange">
            <el-checkbox v-for="server in serverData" :key="server.server_id" :value="server.server_id">{{
              $t(server.server_name)
            }}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item>
          <el-radio-group v-model="conditionRadio" size="large"
            style="margin-left: 80px;display: flex;flex-flow: column nowrap;align-items: flex-start;">
            <el-radio :label="1" :border="true">{{ $t('多选条件') }}</el-radio>
            <el-checkbox-group style="margin-left: 30px;display: flex;flex-flow: column nowrap;align-items: flex-start;"
              v-model="form.conditionInfo" v-if="conditionRadio == 1">
              <el-checkbox :value="1" :key="1">{{ $t('指定等级') }}</el-checkbox>
              <el-form-item v-for="(item, index) in form.Levels" :key="index"
                :label="index === 0 ? $t('等级区间') + '：' : ''" style="margin-bottom: 18px"
                v-if="form.conditionInfo.includes(1)">
                <span v-if="index != 0" style="margin-left:82px"></span>
                <el-input-number v-model="item.NumMin" class="mx-4" :min="0" controls-position="right"
                  @change="handleChange" />-
                <el-input-number v-model="item.NumMax" class="mx-4" :min="item.NumMin" controls-position="right"
                  @change="handleChange" />
                <el-button type="warn" @click="delItem(index)" v-if="index != 0">{{ $t('删除') }}</el-button>
              </el-form-item>
              <el-button type="primary" @click="addItem" v-if="form.conditionInfo.includes(1)">{{ $t('增加等级区间')
              }}</el-button>
              <el-checkbox :label="2" :key="2">{{ $t('是否完成新手教程') }}</el-checkbox>
              <el-switch v-if="form.conditionInfo.includes(2)" v-model="form.IsGreen" size="primary"
                :active-text="$t('是')" :inactive-text="$t('否')" />
              <el-checkbox :label="3" :key="3">{{ $t('是否进行过付费') }}</el-checkbox>
              <el-switch v-if="form.conditionInfo.includes(3)" v-model="form.IsVIP" size="primary"
                :active-text="$t('是')" :inactive-text="$t('否')" />
              <el-checkbox :label="4" :key="4">{{ $t('最晚创角时间') }}</el-checkbox>
              <el-date-picker v-if="form.conditionInfo.includes(4)" v-model="form.LateTime" type="datetime"
                format="YYYY-MM-DD hh:mm:ss" value-format="x"></el-date-picker>
            </el-checkbox-group>
            <el-radio :label="2" v-if="form.ServerID.length == 1 && form.Type.includes(2)" :border="true">{{ $t('唯一条件')
            }}</el-radio>
            <el-radio-group v-model="onlyRadio"
              v-if="form.ServerID.length == 1 && form.Type.includes(2) && conditionRadio == 2" size="large"
              style="margin-left: 30px;display: flex;flex-flow: column nowrap;align-items: flex-start;">
              <el-radio :label="1">{{ $t('领主ID') }}</el-radio>
              <el-input v-model="form.LeaderID" type="textarea" autosize style="width: 500px;" v-if="onlyRadio == 1" />
              <el-text style="margin-left: -340px;" v-if="onlyRadio == 1">{{ $t('Tips:多个领主ID换行分隔') }}</el-text>
              <el-radio :label="2">{{ $t('选择军团') }}</el-radio>
              <el-transfer v-if="onlyRadio == 2" v-model="form.LeagueIDs"
                style="text-align: left; display: inline-block" filterable :filter-method="filterMethod"
                :titles="[$t('剩余军团'), $t('所选军团')]" :button-texts="[$t('移除'), $t('选中')]" :format="{
                  noChecked: '${total}',
                  hasChecked: '${checked}/${total}',
                }" :data="leagueTransData" @change="handleChangeTrans">
                <template #default="{ option }">
                  <span>{{ option.key }} - {{ option.label }}</span>
                </template>
                <template #left-footer>
                  <el-button class="transfer-footer" size="small" @click="moveToRight">{{ $t('全移向右边') }}</el-button>
                </template>
                <template #right-footer>
                  <el-button class="transfer-footer" size="small" @click="moveToLeft">{{ $t('全移向左边') }}</el-button>
                </template>
              </el-transfer>
            </el-radio-group>
          </el-radio-group>
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
import { ElMessage, ElMessageBox } from 'element-plus'
import { onMounted } from 'vue';
import { useI18n } from "vue-i18n";
import { codeUtil } from "~/composables/codeUtil";
import QuillEditor from '~/components/QuillEditor.vue';
import { useAuthStore } from '~/stores/auth';

const { t } = useI18n();
const authStore = useAuthStore();
const { getInfo, postInfo, postMicro } = useApi();
const { codeRNo, decodeRNo } = codeUtil();
const getMsg = (val) => {
  form.Content = val;
}

definePageMeta({
  keepalive: true,  // 必须为需要缓存的页面启用
  title: '公告列表',
});

// 表格数据
const quillEditorRef = ref(null);
const tableData = ref([]);
const serverData = ref([]);
const total = ref(0);
const curTab = ref('0');
const currentPage = ref(1);
const conditionRadio = ref('');
const isLoading = ref(false);
const leagueData = ref([]);
const leagueTransData = ref([]);

const handlePageChange = async (page) => {
  isLoading.value = true
  await loadData(page).then(res => {
    isLoading.value = false
  });
  currentPage.value = page;
}
const checkAll = ref(false);
const isIndeterminate = ref(false);
const checkAllServer = ref(false);
const isIndeterminateServer = ref(false);
const onlyRadio = ref(0);

// 数据加载
const loadData = async (page) => {
  const getData = await getInfo("mail/getNoticeList", { Page: page });
  tableData.value = getData.data;
  total.value = Number(getData.total);
}

const columns = [
  { label: '标题', prop: 'Title' },
  { label: '内容', prop: 'Content' },
  {
    label: '类型', prop: 'Type', formatter: (row) => {
      switch (row.Type) {
        case 2:
          return t('游戏内公告');
        case 1:
          return t('网关公告');
        default:
          return t('两者都发');
      }
    }
  },
  {
    label: '条件选择', prop: 'Condition', width: 200, formatter: (row) => {
      var result = "";
      try {
        const condition = JSON.parse(row.Condition);
        for (const key in condition) {
          switch (key) {
            case 'Levels':
              result += t('等级') + '：' + JSON.stringify(condition[key]) + "<br/>";
              break;
            case 'IsGuideEnd':
              result += t('新手任务完成') + '：' + (condition[key] == 1 ? t('是') : t('否')) + "<br/>";
              break;
            case 'IsPay':
              result += t('付费玩家') + '：' + (condition[key] == 1 ? t('是') : t('否')) + "<br/>";
              break;
            case 'GameDay':
              result += t('最晚创角时间') + '：' + new Date(condition[key] * 1000).toLocaleString() + "<br/>";
              break;
            case 'RoleIDs': {
              result += t('领主ID') + "：";
              for (const id of condition[key]) {
                result += codeRNo(id) + ",";
              }
              result += "<br/>";
            }
              break;
            case 'Legions': {
              result += t('军团') + "：";
              for (const id of condition[key]) {
                result += id + ",";
              }
              result += "<br/>";
            }
              break;
            default:
              result += key + "：" + JSON.stringify(condition[key]) + "<br/>";
              break;
          }
        }
      } catch (e) {
        return row.Condition;
      }
      return result;
    }
  },
  { label: '服务器', prop: 'ServerID', formatter: (row) => transServerInfo(row.ServerID) },
  {
    label: '开始时间', prop: 'StartTime', formatter: (row) => {
      return row.StartTime ? new Date(row.StartTime * 1000).toLocaleString() : t('永久');
    }
  },
  {
    label: '结束时间', prop: 'EndTime', formatter: (row) => {
      return row.StartTime ? new Date(row.StartTime * 1000).toLocaleString() : t('永久');
    }
  },
  { label: '强制弹窗', prop: 'Force', formatter: (row) => row.Force == 1 ? t('是') : t('否') },
  { label: '是否启用', prop: 'Enabled', formatter: (row) => row.Enabled == 1 ? t('已启用') : t('未启用') },
  { label: '状态', prop: 'Status', formatter: (row) => row.Status == 1 ? t('已发送') : t('未发送') },
  { label: '发送成功服务器', prop: 'SuccessSID', formatter: (row) => transServerInfo(row.SuccessSID) },
  { label: '发送失败服务器', prop: 'ErrorSID', formatter: (row) => transServerInfo(row.ErrorSID) },
]

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("mail/getNoticeList").then(res => {
      isLoading.value = false;
      tableData.value = res.data;
      total.value = Number(res.total);
    });
    const serverList = await getInfo("centre/getServerList");
    serverData.value = serverList.data || [];
    // 如果没有获取到数据，添加一个默认选项
    if (serverData.value.length === 0) {
      serverData.value.push({
        server_id: '',
        server_name: '加载失败'
      });
    }
  } finally {
    console.log(tableData.value, total.value);
  }
});

const form = reactive({
  Title: '',
  Content: '',
  StartTime: '',
  EndTime: '',
  Force: false,
  Enabled: false,
  Order: "",
  IsGreen: false,
  IsVIP: false,
  LateTime: '',
  Type: [],
  conditionInfo: [],
  ServerID: [],
  LeagueIDs: [],
  LeaderID: "",
  Levels: [
    {
      NumMin: 0,
      NumMax: 0,
    }
  ],
});

const onSubmit = async () => {
  const { Enabled, Levels, ServerID, StartTime, LeaderID, LeagueIDs, EndTime, Force, Type, conditionInfo, LateTime, IsGreen, IsVIP, ...addInfo } = form;
  addInfo.Force = Force ? 1 : 0;
  addInfo.Enabled = Enabled ? 1 : 0;
  addInfo.StartTime = StartTime / 1000 || 0;
  addInfo.EndTime = EndTime / 1000 || 0;
  addInfo.ServerID = ServerID.join(',') || 0;
  if (Type.length == 0) {
    ElMessage.error('请选择玩家类型！');
    return;
  } else if (Type.length > 1) {
    addInfo.Type = 3;
  } else {
    addInfo.Type = Type[0];
  }
  const conditionTemp = {};
  if (conditionInfo.length > 0) {
    for (let i = 0; i < conditionInfo.length; i++) {
      switch (conditionInfo[i]) {
        case 1: {
          const levels = [];
          for (let j = 0; j < form.Levels.length; j++) {
            if (form.Levels[j].NumMin != 0 || form.Levels[j].NumMax != 0) {
              levels.push([form.Levels[j].NumMin, form.Levels[j].NumMax]);
            }
          }
          conditionTemp["Levels"] = levels ?? [];
          break;
        }
        case 2: {
          conditionTemp["IsGuideEnd"] = IsGreen ? 1 : 0;
          break;
        }
        case 3: {
          conditionTemp["IsPay"] = IsVIP ? 1 : 0;
          break;
        }
        case 4: {
          conditionTemp["GameDay"] = LateTime / 1000 || 0;
          break;
        }
      }
    }
    if (Object.keys(conditionTemp).length > 0) {
      addInfo["Condition"] = JSON.stringify(conditionTemp);
    }
  } else {
    addInfo["Condition"] = "{}";
  }
  if (conditionRadio.value == 2) {
    if (LeagueIDs.length > 0 && onlyRadio.value == 2) {
      addInfo["Condition"] = "{\"Legions\":[" + LeagueIDs.join(',') + "]}";
    } else if (LeaderID != "" && onlyRadio.value == 1) {
      const temp = LeaderID.split('\n').map((item) => {
        return decodeRNo(item.trim());
      });
      addInfo["Condition"] = "{\"RoleIDs\":[" + temp.join(',') + "]}";
    } else {
      ElMessage.error('请选择联盟或领主ID！');
      return;
    }
  }
  if (!form.ID) {
    await postInfo("mail/addNotice", addInfo).then(res => {
      ElMessage.success('添加成功！');
    });
  } else {
    await postInfo("mail/updateNotice", addInfo).then(res => {
      ElMessage.success('修改成功！');
    });
  }
  curTab.value = '0';
  loadData(currentPage.value);
  onReset();
}

const onReset = () => {
  delete form.ID;
  form.Title = '';
  form.Content = '';
  if (quillEditorRef.value) {
    quillEditorRef.value.updateValue("");
  }
  onlyRadio.value = 0;
  conditionRadio.value = 0;
  form.StartTime = '';
  form.EndTime = '';
  form.Force = false;
  form.Enabled = false;
  form.Order = "";
  form.IsGreen = false;
  form.IsVIP = false;
  form.LateTime = '';
  form.Type = [];
  form.conditionInfo = [];
  form.ServerID = [];
  form.LeagueIDs = [];
  form.LeaderID = "";
  form.Levels = [{
    NumMax: 0,
    NumMin: 0,
  }];
  handleCheckedServerChange(form.ServerID);
}

const moveToRight = () => {
  form.LeagueIDs = leagueTransData.value?.map((item) => item.key) || [];
}

const moveToLeft = () => {
  form.LeagueIDs = [];
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
    await postInfo("mail/updateNotice", { ID: data.NoticeID, Del: 1 }).then(res => {
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

const handleEdit = (data) => {
  form.ID = data.NoticeID;
  form.Title = data.Title;
  if (quillEditorRef.value) {
    quillEditorRef.value.updateValue(data.Content);
  }
  form.ServerID = data.ServerID?.split(',').map((item) => Number(item)) || [];
  handleCheckedServerChange(form.ServerID);
  form.Content = data.Content;
  form.StartTime = data.StartTime * 1000 || '';
  form.EndTime = data.EndTime * 1000 || '';
  form.Force = data.Force == 1 ? true : false;
  form.Enabled = data.Enabled == 1 ? true : false;
  form.Order = data.Order || "";
  const condition = JSON.parse(data.Condition);
  if (data.Type == 3) {
    form.Type = [1, 2];
  } else {
    form.Type = [data.Type];
  }
  handleCheckedChange(form.Type);
  for (const key in condition) {
    switch (key) {
      case "Levels":
        form.Levels = [];
        for (let i = 0; i < condition[key].length; i++) {
          form.Levels.push({
            NumMax: condition[key][i][1],
            NumMin: condition[key][i][0]
          })
        }
        conditionRadio.value = 1;
        form.conditionInfo.push(1);
        break;
      case "IsGuideEnd":
        form.IsGreen = condition[key] == 1 ? true : false;
        conditionRadio.value = 1;
        form.conditionInfo.push(2);
        break;
      case "IsPay":
        form.IsVIP = condition[key] == 1 ? true : false;
        conditionRadio.value = 1;
        form.conditionInfo.push(3);
        break;
      case "GameDay":
        form.LateTime = condition[key] * 1000 || '';
        conditionRadio.value = 1;
        form.conditionInfo.push(4);
        break;
      case "RoleIDs":
        form.LeaderID = condition[key].map(item => codeRNo(item)).join('\n');
        conditionRadio.value = 2;
        onlyRadio.value = 1;
        break;
      case "Legions":
        form.LeagueIDs = condition[key];
        conditionRadio.value = 2;
        onlyRadio.value = 2;
        break;
    }
  }
  curTab.value = '1';
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
    await postMicro({ Cmd: "tendo/pushNotice", Host: "MailHost", QueryType: "Get", ID: data.NoticeID, IsReSend: 0 }).then(res => {
      if (res.Code != 0) return ElMessage({ type: 'error', message: res.Msg });
      loadData(currentPage.value);
      ElMessage({
        type: 'success',
        message: 'Send completed',
      })
    });
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: 'Send canceled',
    })
  })
}

const handleResend = (data) => {
  ElMessageBox.confirm(
    '确定要补发该数据?',
    '补发确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(async () => {
    await postMicro({ Cmd: "tendo/pushNotice", Host: "MailHost", QueryType: "Get", ID: data.NoticeID, IsReSend: 1 }).then(res => {
      loadData(currentPage.value);
      ElMessage({
        type: 'success',
        message: 'Send completed',
      })
    });
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: 'Send canceled',
    })
  })
}

const handleTab = (tab) => {
  onReset();
}

const transServerInfo = (column) => {
  if (!column) return '';
  var serverList = column.split(',');
  var result = '';
  for (let serverID of serverList) {
    if (serverID === '0') return '全服';
    if (serverData.value.find(item => item.server_id === Number(serverID))) {
      result += (serverData.value.find(item => item.server_id === Number(serverID))?.server_name || '未知') + ",";
    }
  }
  return result.slice(0, -1);
}

const getOperationButtons = (row) => {
  if (row && row.Status == 1) {
    return [
      { label: '发送', type: 'danger', actionType: 'send' },
      { label: '编辑', type: 'primary', actionType: 'edit' },
      { label: '删除', type: 'danger', actionType: 'delete' },
      { label: '补发', type: 'primary', actionType: 'resend' },
    ];
  }
  return [
    { label: '发送', type: 'danger', actionType: 'send' },
    { label: '编辑', type: 'primary', actionType: 'edit' },
    { label: '删除', type: 'danger', actionType: 'delete' }
  ];
}

const handleCheckedChange = (value) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === 2;
  isIndeterminate.value = checkedCount > 0 && checkedCount < 2;
}

const handleCheckAllChange = (val) => {
  form.Type = val ? [1, 2] : [];
  isIndeterminate.value = false;
}

const handleCheckAllServerChange = (val) => {
  form.ServerID = val ? serverData.value.map(item => item.server_id) : []
  isIndeterminateServer.value = false;
}

const handleCheckedServerChange = async (value) => {
  const checkedCount = value.length;
  if (checkedCount == 1) {
    await postMicro({ Host: "DBLinkHost", Cmd: "League", Params: {}, Sid: value[0] }).then(res => {
      leagueData.value = res.Content.LeagueVo;
    }).then(async () => {
      await generateData();
    });
  }
  checkAllServer.value = checkedCount === serverData.value.length;
  isIndeterminateServer.value = checkedCount > 0 && checkedCount < serverData.value.length;
}

const addItem = () => {
  form.Levels.push({
    NumMin: 0,
    NumMax: 0,
  })
}

const delItem = (index) => {
  form.Levels.splice(index, 1);
}

const handleChangeTrans = async (value, direction, movedKeys) => {
  console.log(value, direction, movedKeys);
}

const filterMethod = (query, item) => {
  return item.label.toLowerCase().includes(query.toLowerCase()) || String(item.key).includes(query.toLowerCase());
}

const generateData = async () => {
  leagueTransData.value = [];
  for (let i = 0; i < leagueData.value.length; i++) {
    leagueTransData.value.push({
      key: leagueData.value[i].LeagueID,
      label: leagueData.value[i].Name,
    });
  }
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

.transfer-footer {
  margin-left: 15px;
  padding: 6px 5px;
}
</style>