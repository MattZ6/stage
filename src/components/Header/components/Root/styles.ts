import Constants from 'expo-constants'

import { styled } from '@styles/stitches.config'

export namespace HeaderRootStyles {
  const PADDING = 16
  const HEIGHT = PADDING + Constants.statusBarHeight + 44 + PADDING

  export const Container = styled('View', {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$space$base',

    paddingTop: Constants.statusBarHeight + PADDING,
    paddingHorizontal: PADDING,
    paddingBottom: PADDING,
    height: HEIGHT,
  })
}
