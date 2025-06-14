<template>
  <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane :label="$t('平台预览')">
      <el-table :header-cell-style="{
        background: '#aaaaaaaa',  // 背景色
        color: '#333',  // 字体颜色
      }" :data="tableData" style="width: 100%" :border="true">
        <el-table-column type="expand">
          <template #default="props">
            <div m="7">
              <el-table :data="props.row.servers" :border="true" :header-cell-style="{
                background: '#aaaaaaaa',  // 背景色
                color: '#333',  // 字体颜色
              }">
                <el-table-column :label="$t('服务器名称')" prop="server_name" />
                <el-table-column :label="$t('服务器类型')" prop="server_type" />
                <el-table-column :label="$t('总注册数')" prop="RegNums" />
                <el-table-column :label="$t('总创建数')" prop="RoleNums" />
                <el-table-column :label="$t('总付费角色数')" prop="TotalOrderNum" />
                <el-table-column :label="$t('总付费金额')" prop="TotalOrderAmount" />
              </el-table>
            </div>
          </template>
        </el-table-column>
        <el-table-column :label="$t('平台名')" prop="name" />
        <el-table-column :label="$t('状态')" prop="status" />
        <el-table-column :label="$t('总注册数')" prop="RegNums" />
        <el-table-column :label="$t('总创建数')" prop="RoleNums" />
        <el-table-column :label="$t('总付费角色数')" prop="TotalOrderNum" />
        <el-table-column :label="$t('总付费金额')" prop="TotalOrderAmount" />
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { useApi } from "~/composables/useApi"
import { Search } from '@element-plus/icons-vue'
const { getInfo, postInfo } = useApi();
definePageMeta({
  keepalive: true,  // 必须为需要缓存的页面启用
  tabName: 'structure',  // 相同类型的详情页使用相同name
  title: '结构一览'
});
// 表格数据
const tableData = ref([]);

onMounted(async () => {
  try {
    tableData.value = (await getInfo("centre/getStructureList")).platList;
    console.log(tableData.value);
  } finally {
  }

})
</script>

<style scoped>
:deep(.el-input__wrapper) {
  border-radius: 20px;
  padding: 0 15px;
}
</style>