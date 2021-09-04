import VueI18n from 'vue-i18n'
import en from '@/locales/en'
import vi from '@/locales/vi'
import {getLocale} from "@/utils/cookie";

export const i18n = new VueI18n({
  locale: getLocale(),
  fallbackLocale: process.env.VUE_APP_DEFAULT_LOCALE,
  messages: {
    'en': en,
    'vi': vi
  },
})
