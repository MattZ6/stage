import { Dimensions } from 'react-native'
import Animated from 'react-native-reanimated'

import { styled } from '@styles/stitches.config'

const screen = Dimensions.get('screen')

export namespace BottomSheetContentStyles {
  export const Container = styled(Animated.View, {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    maxHeight: screen.height * 0.85,

    backgroundColor: '$backgroundSolid',

    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  })
}
