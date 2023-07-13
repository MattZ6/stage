import { styled } from '@styles/stitches.config'

export namespace ChipRootStyles {
  export const Wrapper = styled('View', {
    borderRadius: '$full',
    overflow: 'hidden',

    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '$elementBorderSolid',

    variants: {
      selected: {
        true: {
          borderColor: '$elementBorderHover',
        },
      },
    },
  })

  export const Content = styled('View', {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$space$sm',

    paddingHorizontal: '$base',

    height: 36,

    variants: {
      selected: {
        true: {
          backgroundColor: '$elementBackgroundActive',
        },
      },
    },
  })
}
