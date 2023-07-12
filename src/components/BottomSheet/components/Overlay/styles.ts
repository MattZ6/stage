import Animated from 'react-native-reanimated'

import { styled } from '@styles/stitches.config'

export namespace BottomSheetOverlayStyles {
  export const Container = styled(Animated.View, {
    flex: 1,
    backgroundColor: '$backdropOverlay',
  })
}
