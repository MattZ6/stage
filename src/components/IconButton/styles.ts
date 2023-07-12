import { Touchable } from '@components/Touchable'

import { styled } from '@styles/stitches.config'

export namespace IconButtonStyles {
  const SIZE = 44

  export const Wrapper = styled('View', {
    borderRadius: SIZE,
    overflow: 'hidden',
  })

  export const Button = Touchable

  export const Content = styled('View', {
    alignItems: 'center',
    justifyContent: 'center',

    width: SIZE,
    height: SIZE,
    borderRadius: SIZE,

    variants: {
      variant: {
        filled: {
          backgroundColor: '$backgroundSubtle',
        },
        transparent: {},
      },
    },

    defaultVariants: {
      variant: 'filled',
    },
  })
}
