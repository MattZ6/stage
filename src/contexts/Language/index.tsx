import { getLocales } from 'expo-localization'
import i18next from 'i18next'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { initReactI18next, useTranslation } from 'react-i18next'

import { locales as resources } from '../../locales'
import {
  LanguageContextTypes as ContextTypes,
  LanguageProviderTypes as ProviderTypes,
} from './types'

const [deviceLocale] = getLocales()

function initialize(language: ContextTypes.Language) {
  i18next.use(initReactI18next).init({
    fallbackLng: 'pt',
    lng: language,
    compatibilityJSON: 'v3',
    resources,
  })
}

const LanguageContext = createContext({} as ContextTypes.Context)

const LANGUAGE_OPTIONS: ContextTypes.Language[] = ['en', 'pt']

function LanguageProvider(props: ProviderTypes.Props) {
  const [initialized, setInitialized] = useState(false)
  const { i18n } = useTranslation()

  const { language } = i18n

  // TODO: (Android) On app state changes, set locale

  const changeLanguage = useCallback((language: ContextTypes.Language) => {
    i18next.changeLanguage(language)
    // TODO: Save language on local storage (mmkv)
  }, [])

  useEffect(() => {
    // TODO: Read previous saved language from local storage (mmkv)

    initialize(deviceLocale.languageCode as ContextTypes.Language)

    setInitialized(true)
  }, [])

  const contextValues = useMemo<ContextTypes.Context>(
    () => ({
      changeLanguage,
      languages: LANGUAGE_OPTIONS,
      language: language as ContextTypes.Language,
    }),
    [changeLanguage, language],
  )

  if (!initialized) {
    return null
  }

  return <LanguageContext.Provider {...props} value={contextValues} />
}

export { LanguageContext, LanguageProvider }
