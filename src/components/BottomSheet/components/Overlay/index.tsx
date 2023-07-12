import { useCallback } from 'react'
import { InteractionManager, Pressable } from 'react-native'
import {
  Easing,
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'

import { useBottomSheet } from '@components/BottomSheet/hooks/useBottomSheet'

import { BottomSheetOverlayStyles as Styles } from './styles'

type Props = {
  onBackdropPress?: () => void
}

export function BottomSheetOverlay({ onBackdropPress }: Props) {
  const { translateY, contentHeight } = useBottomSheet()

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translateY.value,
        [0, contentHeight.value],
        [1, 0],
        Extrapolation.EXTEND,
      ),
    }
  }, [])

  const handleBackdropPress = useCallback(() => {
    InteractionManager.runAfterInteractions(() => {
      if (onBackdropPress) {
        translateY.value = withTiming(
          contentHeight.value,
          {
            duration: 150,
            easing: Easing.ease,
          },
          (finished) => {
            if (finished) {
              runOnJS(onBackdropPress)()
            }
          },
        )
      }
    })
  }, [contentHeight.value, onBackdropPress, translateY])

  return (
    <Styles.Container style={animatedStyles}>
      {onBackdropPress && (
        <Pressable style={{ flex: 1 }} onPress={handleBackdropPress} />
      )}
    </Styles.Container>
  )
}
