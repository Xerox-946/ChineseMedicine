// types/echarts.d.ts
import type * as EChartsCore from 'echarts/core'

declare module 'echarts' {
  export * from 'echarts/core'
  export { ECharts } from 'echarts/core'
}

declare global {
  interface Window {
    echarts: typeof EChartsCore
  }
}