import Animated from 'react-native-reanimated'

import { styled } from '@styles/stitches.config'

export namespace BottomSheetDragHandlerStyles {
  export const Container = styled(Animated.View, {
    height: 40,

    alignItems: 'center',
    justifyContent: 'center',
  })

  export const Indicator = styled('View', {
    width: '20%',
    height: 5,
    borderRadius: '$full',
    backgroundColor: '$borderSubtle',
  })
}
