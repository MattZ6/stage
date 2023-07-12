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

    paddingTop: Constants.statusBarHeight + '$base',
    paddingHorizontal: '$base',
    paddingBottom: '$base',
  })

  export const Title = styled('Text', {
    fontFamily: '$bold',
    fontSize: '$xxl',
    lineHeight: '$xxl',
    color: '$textHighContrast',
  })

  export const Content = styled('View', {
    gap: '$space$xl',
    padding: '$base',
  })

  export const Links = styled('View', {
    gap: '$space$base',
  })

  export const Footer = styled('View', {
    gap: '$space$base',
  })

  export const AppVersion = styled('Text', {
    fontFamily: '$regular',
    fontSize: '$xs',
    lineHeight: '$xs',
    color: '$textLowContrast',
    textAlign: 'center',
  })
}
