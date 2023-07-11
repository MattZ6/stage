import { getLocales } from 'expo-localization'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import { locales as resources } from './locales'

const [deviceLocale] = getLocales()

i18next.use(initReactI18next).init({
  fallbackLng: 'pt-BR',
  lng: deviceLocale.languageTag,
  compatibilityJSON: 'v3',
  resources,
})
