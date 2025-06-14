<template>
  <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
    <el-tab-pane :label="$t('静态数据列表')">
      <DynamicTable :columns="columns" :data="tableData" :total="total" :current-page="currentPage" :selection="false"
        pagination @page-change="handlePageChange" :loading="isLoading" @delete="handleDelete" @edit="handleEdit"
        :deleteBtn="false" @add="handleAdd" @query="handleQuery" :operationalButtons="getOperationButtons"
        :operational-width="230" />
    </el-tab-pane>
    <el-tab-pane :label="$t('添加静态数据')" v-if="authStore.checkActionPermission('teleport:add')">
      <el-form :model="form" label-width="auto">
        <el-form-item :label="$t('表名') + '：'">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item :label="$t('描述') + '：'">
          <el-input v-model="form.desc" />
        </el-form-item>
        <el-form-item :label="$t('是否可编辑') + '：'">
          <el-switch v-model="form.isEdit" size="primary" :active-text="$t('是')" :inactive-text="$t('否')" />
        </el-form-item>
        <el-form-item v-if='form.isEdit'>
          <el-form-item v-for="(item, index) in form.tableInfo" :inline="true" class="demo-form-inline" :key="index"
            :label="index === 0 ? $t('表字段配置') + '：' : ''" style="margin-bottom: 18px">
            <span v-if="index != 0" style="margin-left:95px"></span>
            <el-input v-model="item.columnName" placeholder="Please input" style="width:200px" :disabled='index == 0'>
              <template #prepend>{{ $t('字段名:') }}</template>
            </el-input>
            <el-select v-model="item.columnType" style="margin-left: 20px;width:150px"
              @change="handleClassChange(index, item.columnType)" :placeholder="$t('选择字段类型')" :disabled='index == 0'>
              <el-option :label="$t('整型')" value="Integer" />
              <el-option :label="$t('字符')" value="String" />
              <el-option :label="$t('布尔')" value="Boolean" />
              <el-option :label="$t('时间')" value="Date" />
              <el-option :label="$t('浮点')" value="Double" />
            </el-select>
            <div style="margin-left: 50px">
              <el-input v-model="item.columnComment" placeholder="Please input" :disabled='index == 0'>
                <template #prepend>{{ $t('字段描述:') }}</template>
                <template v-if="index != 0 && form.tableInfo.length > 1" #append>
                  <el-button type="warn" @click="delColumn(index)">{{ $t('删除') }}</el-button>
                </template>
              </el-input>
            </div>
          </el-form-item>
          <div style="margin-left:90px;margin-bottom:20px">
            <el-button type="primary" @click="addColumn">{{ $t('添加字段信息') }}</el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{ $t('提交') }}</el-button>
          <el-button @click="onReset">{{ $t('重置') }}</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
  <el-drawer v-model="queryDrawer" :title="chooseData.desc + $t('详细信息')" direction="rtl" size="60%">
    <el-button type="primary" @click="handleDrawerAdd" v-if="chooseData.isEdit == 1"
      v-permission="'staticDataList:add'">{{ $t('添加') }}</el-button>
    <DynamicTable :data="drawerTableData" :delete-btn="false" :selection="false" :pagination="false"
      @edit='handleDrawerEdit' @delete='handleDrawerDel' :columnsComments="commentData"
      :operational="chooseData.isEdit == 1" />
  </el-drawer>
  <el-drawer v-model="addDrawer" :title="chooseData.desc + (isEdit ? $t('修改数据') : $t('添加数据'))" direction="rtl"
    size="50%">
    <el-form ref="dynamicForm" :model="formData" label-width="120px" :rules="formRules">
      <!-- 动态表单生成部分 -->
      <template v-for="(item, index) in commentData" :key="index">
        <!-- 输入框类型 -->
        <el-form-item v-if="item.dataType === 'varchar'" :label="item.comments" :prop="item.codes">
          <el-input v-model="formData[item.codes]" clearable />
        </el-form-item>
        <el-form-item v-else-if="item.dataType === 'int'" v-show="item.codes != 'ID'" :label="item.comments"
          :prop="item.codes">
          <el-input-number v-model="formData[item.codes]" clearable />
        </el-form-item>
        <el-form-item v-else-if="item.dataType === 'double'" :label="item.comments" :prop="item.codes">
          <el-input-number :precision="3" :step="0.1" v-model="formData[item.codes]" clearable />
        </el-form-item>
        <el-form-item v-else-if="item.dataType === 'tinyint'" :label="item.comments" :prop="item.codes">
          <el-switch v-model="formData[item.codes]" size="primary" :active-text="$t('是')" :inactive-text="$t('否')" />
        </el-form-item>
      </template>
      <!-- 表单操作按钮 -->
      <div class="drawer-footer">
        <el-button type="primary" @click="handleSubmit">{{ $t('提交') }}</el-button>
        <el-button @click="addDrawer = false">{{ $t('取消') }}</el-button>
      </div>
    </el-form>
  </el-drawer>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useApi } from "~/composables/useApi"
import { ElMessage, ElMessageBox } from 'element-plus'
import { useStaticStore } from '~/stores/static';
import { useAuthStore } from '~/stores/auth';

const staticStore = useStaticStore();
const { getInfo, postInfo } = useApi();

definePageMeta({
  keepalive: true,  // 必须为需要缓存的页面启用
  title: '静态数据列表',
});

// 表格数据
const tableData = ref([]);
const queryDrawer = ref(false);
const authStore = useAuthStore();
const addDrawer = ref(false);
const total = ref(0);
const drawerTableData = ref([]);
const curTab = ref('0');
const isEdit = ref(false);
const currentPage = ref(1);
const isLoading = ref(false);
const commentData = ref([]);
var formData = reactive({});
var chooseData = reactive({});
const handlePageChange = async (page) => {
  isLoading.value = true
  await loadData(page).then(res => {
    isLoading.value = false
  });
  currentPage.value = page;
}

// 数据加载
const loadData = async (page) => {
  const getData = await getInfo("centre/getStaticList", { Page: page });
  tableData.value = getData.data;
  total.value = getData.total;
}

const columns = [
  { label: '序列', prop: 'id' },
  { label: '表名', prop: 'name' },
  { label: '描述', prop: 'desc' },
  {
    label: '最后更新时间', prop: 'updatetime', formatter: (row, column, cellValue) => {
      return new Date(row.updatetime * 1000).toLocaleString();
    }
  },
];

onMounted(async () => {
  try {
    isLoading.value = true;
    await getInfo("centre/getStaticList").then(res => {
      isLoading.value = false;
      tableData.value = res.data;
      total.value = res.total;
    });
  } finally {
    console.log(tableData.value, total.value);
  }
});

const form = reactive({
  name: '',
  desc: '',
  isEdit: false,
  tableInfo: [
    {
      columnName: 'ID',
      columnType: 'Integer',
      columnComment: '序号'
    },
    {
      columnName: '',
      columnType: '',
      columnComment: ''
    }
  ]
})

const onSubmit = async () => {
  const { ...addInfo } = form;
  addInfo["isEdit"] = form.isEdit ? 1 : 0;
  addInfo["tableInfo"] = form.tableInfo.filter(item => item.columnName && item.columnType);
  await postInfo("centre/addStatic", addInfo).then(res => {
  });
  curTab.value = '0';
  loadData(currentPage.value);
  onReset();
}

const onReset = () => {
  form.name = ''
  form.desc = ''
  form.isEdit = false;
}

const onResetDrawer = () => {
  formData = reactive({});
}

const getOperationButtons = (row) => {
  if (row && row.isEdit) {
    return [
      { label: '查看', type: 'primary', actionType: 'query' },
      { label: '添加', type: 'primary', actionType: 'add' },
      { label: '删除', type: 'danger', actionType: 'delete' }
    ];
  }
  return [
    { label: '预览', type: 'primary', actionType: 'query' },
    { label: '更新', type: 'primary', actionType: 'edit' },
    { label: '删除', type: 'danger', actionType: 'delete' }
  ];
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
    await postInfo("centre/delStatic", { id: data.id }).then(res => {
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
  ElMessageBox.confirm(
    '确定要更新该表?',
    '更新确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(async () => {
    await postInfo("centre/updateStatic", { id: data.id }).then(res => {
      ElMessage({
        type: 'success',
        message: 'Update completed',
      });
    });
    await staticStore.fetchSysInfo(data.name);
    loadData(currentPage.value);
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: 'Update canceled',
    })
  })
}

const handleQuery = async (data) => {
  queryDrawer.value = true;
  chooseData = data;
  const name = data.name.replace(/(^|_+)centre(_+|$)/gi, '$1$2')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
  commentData.value = await getInfo("centre/getTableComment", { TableName: data.name, TableSchema: 'tendo_backstage' });
  if (data.isEdit == 1) {
    drawerTableData.value = await staticStore.fetchSysInfo(data.name);
  } else {
    drawerTableData.value = await staticStore.getCacheSysInfo(name);
    if (drawerTableData.value == undefined) {
      drawerTableData.value = await staticStore.fetchSysInfo(data.name);
    }
  }
}

const handleAdd = async (data) => {
  addDrawer.value = true;
  isEdit.value = false;
  chooseData = data;
  formData = reactive({});
  commentData.value = await getInfo("centre/getTableComment", { TableName: data.name, TableSchema: 'tendo_backstage' });
}

const handleDrawerEdit = async (data) => {
  isEdit.value = true;
  formData = data;
  addDrawer.value = true;
}

const handleDrawerDel = async (data) => {
  ElMessageBox.confirm(
    '确定要删除该数据?',
    '删除确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  ).then(async () => {
    await postInfo("centre/delTableInfo", { TableName: chooseData.name, ID: data.ID }).then(res => {
      if (res == 'ok') {
        ElMessage({
          type: 'success',
          message: '删除成功!',
        });
        handleQuery(chooseData);
      } else {
        ElMessage({
          type: 'error',
          message: '删除失败!',
        });
      }
    });
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: 'Delete canceled',
    })
  })
}

const handleDrawerAdd = () => {
  handleAdd(chooseData);
}

const handleTab = (tab) => {
  onReset();
}

const handleSubmit = async () => {
  const { ...addInfo } = formData;
  addInfo["TableName"] = chooseData.name;
  if (!isEdit.value) {
    await postInfo("centre/addTableInfo", addInfo).then(res => {
      if (res == 'ok') {
        ElMessage({
          type: 'success',
          message: '添加成功!',
        });
      } else {
        ElMessage({
          type: 'error',
          message: '添加失败!',
        });
      }
    });
  } else {
    await postInfo("centre/updateTableInfo", addInfo).then(res => {
      if (res == 'ok') {
        ElMessage({
          type: 'success',
          message: '更新成功!',
        });
        handleQuery(chooseData);
      } else {
        ElMessage({
          type: 'error',
          message: '更新失败!',
        });
      }
      formData = reactive({});
      isEdit.value = false;
    });
  }
  addDrawer.value = false;
  queryDrawer.value = true;
  handleQuery(chooseData);
  onResetDrawer();
}

const addColumn = () => {
  form.tableInfo.push({
    columnName: '',
    columnType: '',
    columnComment: ''
  })
}

const delColumn = (index) => {
  form.tableInfo.splice(index, 1);
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

.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>