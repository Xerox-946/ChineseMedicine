<template>
  <div class="dynamic-table">
    <el-table :data="tableData" :header-cell-style="headerStyle" :border="border" v-loading="localLoading"
      :element-loading-text="$t('数据加载中...')" element-loading-spinner="el-icon-loading"
      @selection-change="handleSelectionChange">
      <!-- 选择列 -->
      <el-table-column v-if="selection" type="selection" width="55" />
      <!-- 动态列 -->
      <el-table-column v-for="(col, index) in effectiveColumns" :key="index" :prop="col.prop" :label="$t(col.label)"
        :width="col.width" :formatter="col.formatter || defaultFormatter">
        <template #default="scope">
          <template v-if="col.linkable">
            <a href="javascript:;" @click.stop="handleLinkClick(scope.row, col.prop)">
              <div :class="col.linkStyle || 'default-link'"
                v-html="col.formatter ? col.formatter(scope.row) : scope.row[col.prop]"></div>
            </a>
          </template>
          <template v-else>
            <div :class="col.linkStyle || 'default-info'"
              v-html="col.formatter ? col.formatter(scope.row) : scope.row[col.prop]"></div>
          </template>
        </template>
      </el-table-column>
      <!-- 操作列 -->
      <el-table-column v-if="operational && resolvedButtons().length != 0" fixed="right" :label="$t('操作')"
        :width="operationalWidth">
        <template #default="scope">
          <slot name="operations" :row="scope.row">
            <el-button v-for="(btn, idx) in resolvedButtons(scope.row)" :key="idx" :type="btn.type" :size="btn.size"
              @click="handleOperation(btn.actionType, scope.row)">
              {{ $t(btn.label) }}
            </el-button>
          </slot>
        </template>
      </el-table-column>
    </el-table>

    <!-- 底部操作区 -->
    <div v-if="showFooter" class="table-footer">
      <slot name="footer">
        <el-button v-if="deleteBtn" size="small" type="danger" :disabled="!selectedRows.length"
          @click="handleDeleteAll">
          {{ $t('批量删除') }}
        </el-button>
      </slot>
      <slot name="footer">
        <div v-if="showFooterDesc" style="color: gray;" v-html="showFooterDesc"></div>
      </slot>
      <!-- 分页 -->
      <el-pagination v-if="pagination" class="table-pagination" :current-page="currentPage" :page-size="pageSize"
        :total="total" :layout="paginationLayout" @current-change="handlePageChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CellStyle } from 'element-plus';
import { getCurrentInstance } from 'vue'
import { ref, watch } from 'vue';
import { useAuthStore } from "~/stores/auth"

const authStore = useAuthStore();
const instance = getCurrentInstance();
interface ColumnConfig {
  label: string
  prop: string
  width?: string | number
  formatter?: (row: any) => string
  linkable?: boolean // 新增：是否可点击
  linkStyle?: string // 新增：链接样式类名
}

interface OperationalButton {
  label: string
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'large' | 'default' | 'small'
  actionType: string
}

const props = withDefaults(defineProps<{
  columns: ColumnConfig[]          // 列配置
  data: any[]                      // 表格数据
  selection?: boolean              // 是否显示选择框
  operational?: boolean            // 是否显示操作列
  deleteBtn?: boolean              // 是否显示删除按钮
  showFooterDesc?: string          // 底部描述信息
  pagination?: boolean             // 是否显示分页
  total?: number                   // 总条目数
  currentPage?: number             // 当前页码
  pageSize?: number                // 每页条数
  operationalWidth?: number        // 操作列宽度
  operationalButtons?: OperationalButton[] | ((row: any) => OperationalButton[]) // 操作按钮配置
  border?: boolean                 // 是否显示边框
  loading?: boolean                // 是否显示加载状态
  headerStyle?: CellStyle<any>             // 表头样式
  paginationLayout?: string        // 分页布局
  columnsComments?: any[]      // 列注释信息，用于生成默认列配置时使用
}>(), {
  selection: false,
  operational: true,
  deleteBtn: true,
  showFooterDesc: "",
  pagination: true,
  total: 0,
  currentPage: 1,
  pageSize: 10,
  operationalWidth: 200,
  operationalButtons: () => [
    { label: '编辑', type: 'primary', actionType: 'edit' },
    { label: '删除', type: 'danger', actionType: 'delete' }
  ] as OperationalButton[],
  border: true,
  loading: false,
  headerStyle: () => ({ background: '#aaaaaaaa', color: '#333' }),
  paginationLayout: 'prev, pager, next',
  columnsComments: () => []
});

const resolvedButtons = (row: any = null) => {
  if (!props.operationalButtons) return [];
  const tempList = typeof props.operationalButtons === 'function'
    ? props.operationalButtons(row)
    : props.operationalButtons;
  const resultList: any[] = [];
  for (let btn of tempList) {
    if (authStore.checkActionPermission(actionPermission(btn.actionType))) {
      resultList.push(btn);
    }
  }
  return resultList;
}

const emit = defineEmits([
  'edit',
  'delete',
  'delete-all',
  'page-change',
  'query',
  'add',
  'send',
  'resend',
  'operation'
]);

const actionPermission = (actionType: string) => {
  let parent = instance?.parent
  while (parent && parent.parent && !parent.type.__name) {
    parent = parent.parent;
  }
  return `${parent?.type.__name}:${actionType}`;
}

const normalizedColumns = computed(() => {
  // 用户已提供列配置时直接返回
  if (props.columns?.length) return props.columns
  // 从数据生成默认列配置
  if (props.data?.length) {
    return Object.keys(props.data[0]).map(key => ({
      label: props.columnsComments.find((item: any) => item.codes == key)?.comments || key,
      prop: key,
      width: '180',
      linkable: false, // 默认所有列都可点击
      linkStyle: 'default-info', // 默认样式类名
      formatter: (row: any) => row[key] || '--' // 默认格式化显示
    }))
  }
  return []
})

const effectiveColumns = computed(() =>
  props.columns?.length ? props.columns : normalizedColumns.value
)

// 添加本地 loading 状态控制
const localLoading = ref(false)

// 监听父组件传递的 loading 状态
watch(() => props.loading, (newVal) => {
  localLoading.value = newVal
})

// 分页请求示例
const handlePageChange = async (val: number) => {
  try {
    localLoading.value = true // 开始加载
    emit('page-change', val)
    // 这里一般需要父组件处理数据加载
  } finally {
    localLoading.value = false // 结束加载
  }
}

// 处理链接点击
const handleLinkClick = (row: any, prop: string) => {
  emit('operation', { row, prop })
}

const selectedRows = ref<any[]>([])

// 默认格式化器
const defaultFormatter = (row: any, column: any) => {
  return row[column.property]
}

// 处理批量删除
const handleDeleteAll = () => {
  emit('delete-all', selectedRows.value)
}

// 处理选择变化
const handleSelectionChange = (val: any[]) => {
  selectedRows.value = val;
}

// 处理操作按钮点击
const handleOperation = (actionType: string, row: any) => {
  emit('operation', { actionType, row });
  switch (actionType) {
    case 'edit':
      emit('edit', row)
      break
    case 'delete':
      emit('delete', row)
      break
    case 'query':
      emit('query', row)
      break
    case 'add':
      emit('add', row)
      break
    case 'send':
      emit('send', row)
      break
    case 'resend':
      emit('resend', row)
      break
  }
}

// 计算属性
const tableData = computed(() => props.data)
const showFooter = computed(() => props.deleteBtn || props.pagination || props.showFooterDesc)
</script>

<style scoped>
.dynamic-table {
  margin: 20px 0;
}

.table-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.table-pagination {
  margin-top: 10px;
}

.default-link {
  color: #409eff;
  cursor: pointer;
  text-decoration: underline;
}

.custom-link {
  color: #67c23a;
  font-weight: bold;
}

.default-info {
  text-decoration: none;
}

.custom-info {
  color: red;
  font-weight: bold;
}
</style>