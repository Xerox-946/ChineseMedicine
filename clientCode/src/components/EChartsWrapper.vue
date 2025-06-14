<template>
    <div ref="chartRef" :title="title" :style="{ width: width + 'px', height: height + 'px' }"></div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from '#imports'
import * as echarts from 'echarts/core'
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    MarkLineComponent,
    MarkPointComponent,
    ToolboxComponent
} from 'echarts/components'
import { LineChart, BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { UniversalTransition } from 'echarts/features'

// 注册ECharts组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    MarkLineComponent,
    MarkPointComponent,
    ToolboxComponent,
    LineChart,
    BarChart,
    CanvasRenderer,
    UniversalTransition
])

const props = defineProps({
    chartType: {
        type: String,
        default: 'line',
        validator: (value) => ['line', 'bar'].includes(value)
    },
    xAxisData: {
        type: Array,
        default: () => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    seriesData: {
        type: Array,
        default: () => [
            {
                name: 'Highest',
                data: [10, 11, 13, 11, 12, 12, 9],
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    data: [{ type: 'average', name: 'Avg' }]
                }
            },
            {
                name: 'Lowest',
                data: [1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                    data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
                },
                markLine: {
                    data: [
                        { type: 'average', name: 'Avg' },
                        [
                            {
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            },
                            {
                                symbol: 'circle',
                                label: {
                                    position: 'start',
                                    formatter: 'Max'
                                },
                                type: 'max',
                                name: '最高点'
                            }
                        ]
                    ]
                }
            }
        ]
    },
    width: {
        type: Number,
        default: 1600
    },
    height: {
        type: Number,
        default: 700
    },
    title: {
        type: String,
        default: '图表标题'
    }
})

const chartRef = ref(null)
let chartInstance = null

const initChart = async () => {
    await nextTick()
    if (!chartInstance) {
        chartInstance = echarts.init(chartRef.value)
    }

    const option = {
        title: {
            text: props.title
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {},
        toolbox: {
            show: true,
            feature: {
                dataZoom: { yAxisIndex: 'none' },
                dataView: { readOnly: false },
                magicType: {
                    type: ['line', 'bar']
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: props.xAxisData
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: props.seriesData.map(series => ({
            ...series,
            type: props.chartType, // 动态设置系列类型
            // 保留原有markPoint/markLine配置
            markPoint: series.markPoint || {},
            markLine: series.markLine || {}
        })),
        animationEasing: 'elasticOut',
        animationDelayUpdate(idx) {
            return idx * 50;
        }
    }

    chartInstance.setOption(option)
}

const resizeChart = () => {
    chartInstance?.resize()
}

watch(() => props.xAxisData, () => {
    chartInstance?.setOption({ xAxis: { data: props.xAxisData } })
}, { deep: true })

watch(() => props.seriesData, (newVal) => {
    chartInstance?.setOption({ series: newVal })
}, { deep: true })

watch([() => props.width, () => props.height], resizeChart)

watch(() => props.chartType, (newType) => {
    chartInstance.setOption({
        series: props.seriesData.map(series => ({
            ...series,
            type: newType
        }))
    })
})

onMounted(() => {
    initChart()
    window.addEventListener('resize', resizeChart)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeChart)
    chartInstance?.dispose()
    chartInstance = null
})
</script>