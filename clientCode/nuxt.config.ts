// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
  ],
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
        allowSyntheticDefaultImports: true
      }
    }
  },
  srcDir: 'src',
  css: [
    'element-plus/dist/index.css',
    '~/assets/css/global.css',
    '@vueup/vue-quill/dist/vue-quill.snow.css',  // 引入样式
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false, // 关闭 SSR，纯前端模式
  // target: 'static' // 生成静态文件
  elementPlus: {
    /** 可选：配置主题色 */
    themes: ['dark']
  },
  pinia: {
    storesDirs: ['stores/**', 'custom/stores/**'],
  },
  plugins: [
    '~/plugins/element-plus-icons.ts',
    '~/plugins/persistedstate.client.ts',
    '~/patches/dom-monitor.js',
    '~/plugins/directive.permission.ts',
  ],
  build: {
    transpile: ['vue-quill-editor', 'echarts'],
  },
  i18n: {
    strategy: 'no_prefix',
    locales: [
      { code: 'zh', name: '中文' },
      { code: 'ja', name: '日本語' },
    ],
    vueI18n: '~/i18n/index.ts' // 语言配置文件路径
  },
  vite: {
    plugins: [
      {
        name: 'inject-file-path',
        transform(code, id) {
          if (id.endsWith('.vue')) {
            const fileName = id.split(/[\\/]/).pop() || ''
            const rawFileName = fileName.replace(/\.\w{8}\.vue$/, '.vue')
            // 修改此处注入属性名为 fileName
            return code.replace(
              /export\s+default\s+defineComponent\(\{/,
              `export default defineComponent({ fileName: '${rawFileName}', `
            )
          }
        }
      }
    ],
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.message.includes('DOMNodeInserted')) return
          warn(warning)
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3001',
      apiMicro: 'http://localhost:3001/micro',
      apiLogin: 'http://localhost:3001/auth/login'
    }
  },
})