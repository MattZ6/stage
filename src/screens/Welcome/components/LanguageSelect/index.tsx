import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, InteractionManager, Modal } from 'react-native'

import { useLanguage } from '@hooks/useLanguage'

import { LanguageSelectStyles as Styles, BottomSheetStyles } from './styles'

export function LanguageSelect() {
  const { language, languages, changeLanguage } = useLanguage()
  const { t } = useTranslation('languages')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Styles.Button activeOpacity={0.6} onPress={() => setIsModalOpen(true)}>
        <Styles.Icon />

        <Styles.Language>{t(`${language}.title`)}</Styles.Language>
      </Styles.Button>

      <Modal
        visible={isModalOpen}
        transparent
        animationType="none"
        statusBarTranslucent
        onRequestClose={() => setIsModalOpen(false)}
      >
        <>
          <BottomSheetStyles.Overlay />

          <BottomSheetStyles.Container>
            <FlatList
              data={languages}
              keyExtractor={(item) => String(item)}
              renderItem={({ item }) => {
                const isSelected = language === item
                const label = t(`${item}.label`)

                return (
                  <BottomSheetStyles.Button
                    onPress={() => {
                      InteractionManager.runAfterInteractions(() => {
                        changeLanguage(item)
                        setIsModalOpen(false)
                      })
                    }}
                  >
                    <BottomSheetStyles.Content>
                      <BottomSheetStyles.Language>
                        {t(`${item}.title`)}
                      </BottomSheetStyles.Language>
                      {label && (
                        <BottomSheetStyles.Label>
                          {label}
                        </BottomSheetStyles.Label>
                      )}
                    </BottomSheetStyles.Content>

                    {isSelected && <BottomSheetStyles.CheckIcon />}
                  </BottomSheetStyles.Button>
                )
              }}
            />
          </BottomSheetStyles.Container>
        </>
      </Modal>
    </>
  )
}
