import { useSettingStore } from "~/stores/setting"
// import {  } from '@nuxtjs/i18n';
import { type LanguageType } from '~/types/store'

export default defineNuxtRouteMiddleware(() => {
  // const { locale } = useI18n();
  const settingStore = useSettingStore()
  const lan = settingStore.getLanguage as LanguageType;
  useNuxtApp().$i18n.setLocale(lan);
});