import Check from 'phosphor-react-native/src/icons/Check'

import { Touchable } from '@components/Touchable'

import { styled } from '@styles/stitches.config'

export namespace LanguageButtonStyles {
  export const Button = styled(Touchable, {})

  export const HEIGHT = 80

  export const Container = styled('View', {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '$space$base',

    padding: '$base',

    height: HEIGHT,
  })

  export const Content = styled('View', {
    flex: 1,
  })

  export const Language = styled('Text', {
    fontFamily: '$semiBold',
    fontSize: '$base',
    lineHeight: '$base',
    color: '$textHighContrast',
  })

  export const Label = styled('Text', {
    fontFamily: '$regular',
    fontSize: '$base',
    lineHeight: '$base',
    color: '$textLowContrast',
  })

  export const CheckIcon = styled(Check).attrs(({ theme }) => ({
    color: theme.colors.textHighContrast,
    size: 24,
    weight: 'bold',
  }))
}
