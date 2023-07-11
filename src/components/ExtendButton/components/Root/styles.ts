import {
  Platform,
  // TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native'

import { styled } from '@styles/stitches.config'

const BaseTouchable = Platform.select({
  // android: TouchableNativeFeedback,
  default: TouchableOpacity,
})

export namespace ExtendButtonRootStyles {
  export const Container = styled('View', {
    borderRadius: 8,
    overflow: 'hidden',
  })

  export const Touchable = styled(BaseTouchable, {})

  export const Content = styled('View', {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,

    width: '100%',
    height: 48,
    backgroundColor: '$elementBackgroundSolid',

    paddingHorizontal: 16,
  })
}
