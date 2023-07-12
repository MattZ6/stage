import Animated from 'react-native-reanimated'

import { styled } from '@styles/stitches.config'

export namespace FieldErrorStyles {
  export const Container = styled('View', {
    justifyContent: 'center',

    height: '$lineHeights$base',

    overflow: 'hidden',
  })

  export const Text = styled(Animated.Text, {
    fontSize: '$sm',
    lineHeight: '$sm',
    color: 'red',
  })
}
