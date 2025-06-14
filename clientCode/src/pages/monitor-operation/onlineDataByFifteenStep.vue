<template>
    <el-tabs type="border-card" class="demo-tabs" v-model="curTab" @tab-click="handleTab">
        <el-form :model="form" label-width="auto">
            <el-form-item>
                <el-form-item :label="$t('所属平台') + '：'">
                    <el-select v-model="form.GameOperator" style="width:100px;">
                        <el-option :label="$t('全部')" value="0" />
                        <el-option v-for="plat in platData" :label="$t(plat.name)" :value="plat.platform_id" />
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('所属服务器') + '：'" style="margin-left:20px">
                    <el-select v-model="form.ServerID" style="width:100px;">
                        <el-option :label="$t('全部')" value="0" />
                        <el-option-group :label="$t('运行中')">
                            <el-option v-for="server in serverData" v-show="server.status > 0"
                                :label="server.server_name" :value="server.server_id" />
                        </el-option-group>
                        <el-option-group :label="$t('已下线')">
                            <el-option v-for="server in serverData" v-show="server.status <= 0"
                                :label="server.server_name" :value="server.server_id" />
                        </el-option-group>
                    </el-select>
                </el-form-item>
                <el-form-item :label="$t('时间') + '：'" style="margin-left:-40px;">
                    <el-date-picker v-model="form.time" type="date" placeholder="Pick a day" :size="size" />
                </el-form-item>
                <el-form-item style="margin-left: 10px;">
                    <el-button type="primary" @click="search()">{{ $t('查询') }}</el-button>
                </el-form-item>
                <el-form-item style="margin-left: 10px;">
                    <el-button type="primary" @click="resetSearch()">{{ $t('撤销查询') }}</el-button>
                </el-form-item>
            </el-form-item>
        </el-form>
        <el-tab-pane :label="$t('当日在线数据')">
            <EChartsWrapper :title="$t('当日在线数据统计')" :xAxis-data="labels" :series-data="chartData" />
        </el-tab-pane>
    </el-tabs>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'

const { getInfo } = useApi();
const serverData = ref([]);
const platData = ref([]);
const isLoading = ref(false);
const labels = ref([]);
const chartData = ref([]);
const chartKey = ref(0);
const form = reactive({
    ServerID: '0',
    GameOperator: '0',
    time: '',
});
definePageMeta({
    keepalive: true,  // 必须为需要缓存的页面启用
    title: '当日在线数据',  // 页面标题
});
onMounted(async () => {
    try {
        isLoading.value = true;
        await getInfo("centre/getDayOnlineInfo").then((res) => {
            isLoading.value = false;
            labels.value = res.date || [];
            chartData.value = [];
            chartData.value.push({
                name: `最大值数据`,
                type: 'line',
                data: res.maxData || [],
                markLine: {
                    data: [{ type: 'average' }]
                }
            });
            chartData.value.push({
                name: `最小值数据`,
                type: 'line',
                data: res.minData || [],
                markLine: {
                    data: [{ type: 'average' }]
                }
            });
            chartData.value.push({
                name: `平均值数据`,
                type: 'line',
                data: res.avgData || [],
                markLine: {
                    data: [{ type: 'average' }]
                }
            });
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
        console.log('服务器数据:', serverData.value);
        console.log('平台数据:', platData.value);
        isLoading.value = false;
    }
});
const search = async () => {
    isLoading.value = true;
    const options = {
        ServerID: form.ServerID,
        GameOperator: form.GameOperator,
        Date: form.time ? formatDate(form.time) : '0',
    }
    await getInfo("centre/getDayOnlineInfo", options).then((res) => {
        labels.value = res.date || [];
        chartData.value = [];
        chartData.value.push({
            name: `最大值数据`,
            type: 'line',
            data: res.maxData || [],
            markLine: {
                data: [{ type: 'average' }]
            }
        });
        chartData.value.push({
            name: `最小值数据`,
            type: 'line',
            data: res.minData || [],
            markLine: {
                data: [{ type: 'average' }]
            }
        });
        chartData.value.push({
            name: `平均值数据`,
            type: 'line',
            data: res.avgData || [],
            markLine: {
                data: [{ type: 'average' }]
            }
        });
    }).finally((res) => {
        chartKey.value++;
        isLoading.value = false;
    });
}

const resetSearch = () => {
  form.ServerID = '0';
  form.GameOperator = '0';
  form.time = '';
  search();
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以需要+1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
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