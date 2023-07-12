import { ReactNode, useCallback } from 'react'
import { LayoutChangeEvent } from 'react-native'
import { withTiming, useAnimatedStyle, Easing } from 'react-native-reanimated'

import { useBottomSheet } from '@components/BottomSheet/hooks/useBottomSheet'

import { BottomSheetContentStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function BottomSheetContent(props: Props) {
  const { contentHeight, translateY } = useBottomSheet()

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    }
  })

  const handleLayout = useCallback(
    ({ nativeEvent }: LayoutChangeEvent) => {
      contentHeight.value = nativeEvent.layout.height

      translateY.value = nativeEvent.layout.height

      translateY.value = withTiming(0, {
        duration: 150,
        easing: Easing.ease,
      })
    },
    [translateY, contentHeight],
  )

  return (
    <Styles.Container
      onLayout={handleLayout}
      {...props}
      style={animatedStyles}
    />
  )
}
