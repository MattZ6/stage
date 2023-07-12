import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { InteractionManager } from 'react-native'

import { useLanguage } from '@hooks/useLanguage'

import { TriggerStyles as Styles } from './styles'

type Props = {
  onPress: () => void
}

export function Trigger({ onPress }: Props) {
  const { language } = useLanguage()
  const { t } = useTranslation('languages')

  const handlePress = useCallback(() => {
    InteractionManager.runAfterInteractions(() => onPress())
  }, [onPress])

  return (
    <Styles.Wrapper>
      <Styles.Button onPress={handlePress}>
        <Styles.Content>
          <Styles.Icon />

          <Styles.Language>{t(`${language}.title`)}</Styles.Language>
        </Styles.Content>
      </Styles.Button>
    </Styles.Wrapper>
  )
}
