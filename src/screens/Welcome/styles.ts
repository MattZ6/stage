import Constants from 'expo-constants'
import { LinearGradient } from 'expo-linear-gradient'

import { styled } from '@styles/stitches.config'

export namespace WelcomeScreenStyles {
  export const Container = styled('View', {
    flex: 1,
    backgroundColor: '$backgroundSolid',
  })

  export const Header = styled('ImageBackground', {
    flex: 1,
  })

  export const Gradient = styled(LinearGradient, {
    flex: 1,
    justifyContent: 'flex-end',

    paddingTop: Constants.statusBarHeight + 16,
    paddingHorizontal: 16,
    paddingBottom: 16,
  }).attrs(({ theme }) => ({
    colors: ['transparent', theme.colors.backgroundSolid],
    locations: [0.2, 0.875],
  }))

  export const Title = styled('Text', {
    fontFamily: '$bold',
    fontSize: 48,
    lineHeight: 60,
    color: '$textHighContrast',
  })

  export const Footer = styled('View', {
    padding: 16,
    gap: 16,
  })

  export const AppVersion = styled('Text', {
    fontSize: 14,
    lineHeight: 24,
    color: '$textLowContrast',
    textAlign: 'center',
  })
}

export namespace ButtonStyles {
  export const Container = styled('View', {
    flexDirection: 'row',
    alignItems: 'center',

    height: 48,
    backgroundColor: '$elementBackgroundSolid',
    borderRadius: 8,

    paddingHorizontal: 12,
  })

  export const Title = styled('Text', {
    fontSize: 14,
    color: '$textHighContrast',
  })
}
