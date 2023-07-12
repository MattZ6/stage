import { useRouter } from 'expo-router'
import { useCallback } from 'react'
import { InteractionManager } from 'react-native'

import { IconButton } from '@components/IconButton'

import { HeaderBackButtonStyles as Styles } from './styles'

export function HeaderBackButton() {
  const { back, canGoBack } = useRouter()

  const handleBack = useCallback(
    () => InteractionManager.runAfterInteractions(() => back()),
    [back],
  )

  if (!canGoBack) {
    return
  }

  return (
    <IconButton onPress={handleBack}>
      <Styles.Icon />
    </IconButton>
  )
}
