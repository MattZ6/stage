import { createContext, memo, useCallback, useMemo } from 'react'
import { Dimensions } from 'react-native'
import {
  Easing,
  runOnJS,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import {
  BottomSheetContextTypes as ContextTypes,
  BottomSheetProviderTypes as ProviderTypes,
} from './types'

const INITIAL_POSITION = Dimensions.get('screen').height

export const BottomSheetContext = createContext({} as ContextTypes.Context)

export const BottomSheetProvider = memo<ProviderTypes.Props>(
  ({ onRequestClose, children }) => {
    const contentHeight = useSharedValue(INITIAL_POSITION)
    const translateY = useSharedValue(INITIAL_POSITION)

    const close = useCallback(() => {
      translateY.value = withTiming(
        INITIAL_POSITION,
        {
          duration: 150,
          easing: Easing.ease,
        },
        (finished) => {
          if (finished) {
            runOnJS(onRequestClose)()
          }
        },
      )
    }, [translateY, onRequestClose])

    const contextValue = useMemo<ContextTypes.Context>(
      () => ({
        contentHeight,
        translateY,
        close,
      }),
      [close, contentHeight, translateY],
    )

    return (
      <BottomSheetContext.Provider value={contextValue}>
        {children}
      </BottomSheetContext.Provider>
    )
  },
)

BottomSheetProvider.displayName = 'BottomSheetProvider'
