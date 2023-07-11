import Constants from 'expo-constants'

import { styled } from '@styles/stitches.config'

export namespace WelcomeScreenStyles {
  export const Container = styled('View', {
    flex: 1,
    backgroundColor: '$backgroundSolid',

    paddingTop: Constants.statusBarHeight,
  })

  export const Title = styled('Text', {
    fontSize: 48,
    color: '$textHighContrast',
  })

  export const Footer = styled('View', {
    padding: 16,
    gap: 16,
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
