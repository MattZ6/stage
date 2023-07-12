import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler'
import {
  Easing,
  runOnJS,
  useAnimatedGestureHandler,
  withTiming,
} from 'react-native-reanimated'

import { useBottomSheet } from '@components/BottomSheet/hooks/useBottomSheet'

import { BottomSheetDragHandlerStyles as Styles } from './styles'

export function BottomSheetDragHandler() {
  const { contentHeight, translateY, close } = useBottomSheet()

  const eventHandler = useAnimatedGestureHandler(
    {
      onActive: (event) => {
        translateY.value = Math.max(0, translateY.value + event.translationY)
      },
      onEnd: (event) => {
        const value = Math.max(0, translateY.value + event.translationY)

        if (value > contentHeight.value / 2) {
          runOnJS(close)()
        } else {
          translateY.value = withTiming(0, {
            duration: 100,
            easing: Easing.ease,
          })
        }
      },
    },
    [],
  )

  return (
    <GestureHandlerRootView>
      <PanGestureHandler onGestureEvent={eventHandler}>
        <Styles.Container>
          <Styles.Indicator />
        </Styles.Container>
      </PanGestureHandler>
    </GestureHandlerRootView>
  )
}
