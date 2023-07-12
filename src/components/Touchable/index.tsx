import { forwardRef } from 'react'
import {
  Platform,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import { useTheme } from '@styles/stitches.config'

export type TouchableProps = TouchableNativeFeedbackProps &
  TouchableOpacityProps

export const Touchable = forwardRef<never, TouchableProps>((props, ref) => {
  const theme = useTheme()

  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        ref={ref}
        background={TouchableNativeFeedback.Ripple(
          theme.colors.elementBackgroundActive,
          false,
        )}
        {...props}
      />
    )
  }

  return <TouchableOpacity ref={ref} activeOpacity={0.6} {...props} />
})

Touchable.displayName = 'Touchable'
