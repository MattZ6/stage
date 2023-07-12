import {
  Platform,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

import { useTheme } from '@styles/stitches.config'

type Props = TouchableNativeFeedbackProps & TouchableOpacityProps

export function Touchable(props: Props) {
  const theme = useTheme()

  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(
          theme.colors.elementBackgroundActive,
          false,
        )}
        {...props}
      />
    )
  }

  return <TouchableOpacity activeOpacity={0.6} {...props} />
}
