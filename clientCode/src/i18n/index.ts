import ja from './locales/ja.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh',
  messages: {
    ja,
    zh: {},
  },
  fallbackLocale: 'zh',
} ));