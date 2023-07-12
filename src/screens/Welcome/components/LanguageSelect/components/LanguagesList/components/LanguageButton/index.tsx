import { useCallback } from 'react'
import { InteractionManager } from 'react-native'

import { LanguageButtonStyles as Styles } from './styles'

type Props<L = string> = {
  title: string
  label?: string
  language: L
  isSelected: boolean
  onSelect: (language: L) => void
}

export function LanguageButton<L = string>({
  title,
  label,
  isSelected,
  language,
  onSelect,
}: Props<L>) {
  const handlePress = useCallback(() => {
    InteractionManager.runAfterInteractions(() => onSelect(language))
  }, [language, onSelect])

  return (
    <Styles.Button onPress={handlePress}>
      <Styles.Container>
        <Styles.Content>
          <Styles.Language>{title}</Styles.Language>
          {label && <Styles.Label>{label}</Styles.Label>}
        </Styles.Content>

        {isSelected && <Styles.CheckIcon />}
      </Styles.Container>
    </Styles.Button>
  )
}

export const HEIGHT = Styles.HEIGHT
