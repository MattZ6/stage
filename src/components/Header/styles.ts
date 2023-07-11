import Constants from 'expo-constants'
import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'

import { styled } from '@styles/stitches.config'

export namespace HeaderStyles {
  export const Container = styled('View', {
    paddingTop: Constants.statusBarHeight + 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
  })

  const size = 44

  export const Button = styled('View', {
    alignItems: 'center',
    justifyContent: 'center',

    width: size,
    height: size,
    borderRadius: size,

    backgroundColor: '$elementBackgroundSolid',
  })

  export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
    color: theme.colors.textLowContrast,
    weight: 'bold',
    size: 24,
  }))
}
