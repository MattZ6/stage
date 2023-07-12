import Globe from 'phosphor-react-native/src/icons/Globe'

import { Touchable } from '@components/Touchable'

import { styled } from '@styles/stitches.config'

export namespace TriggerStyles {
  const size = 40

  export const Wrapper = styled('View', {
    borderRadius: size,
    overflow: 'hidden',
    alignSelf: 'center',

    backgroundColor: 'red',
  })

  export const Button = styled(Touchable)

  export const Content = styled('View', {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

    paddingLeft: '$sm',
    paddingRight: '$base',

    height: size,
    backgroundColor: '$backgroundSubtle',
  })

  export const Icon = styled(Globe).attrs(({ theme }) => ({
    color: theme.colors.textLowContrast,
    size: 20,
  }))

  export const Language = styled('Text', {
    fontFamily: '$regular',
    fontSize: '$sm',
    lineHeight: '$sm',
    color: '$textLowContrast',
  })
}
