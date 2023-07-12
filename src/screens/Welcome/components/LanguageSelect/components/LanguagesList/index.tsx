import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { useLanguage } from '@hooks/useLanguage'

import { LanguageButton, HEIGHT } from './components'

export function LanguagesList() {
  const { t } = useTranslation('languages')
  const { language, languages, changeLanguage } = useLanguage()

  function renderItem({ item }: ListRenderItemInfo<typeof language>) {
    return (
      <LanguageButton
        title={t(`${item}.title`)}
        label={t(`${item}.label`)}
        language={item}
        isSelected={language === item}
        onSelect={changeLanguage}
      />
    )
  }

  return (
    <FlatList
      data={languages}
      keyExtractor={(item) => String(item)}
      maxToRenderPerBatch={6}
      getItemLayout={(_, index) => ({
        length: HEIGHT,
        offset: HEIGHT * index,
        index,
      })}
      renderItem={renderItem}
    />
  )
}
