import { styled } from '@styles/stitches.config'

export namespace FieldContentStyles {
  export const Container = styled('View', {
    flexDirection: 'row',

    borderRadius: 6,

    backgroundColor: '$backgroundSubtle',

    variants: {
      withBorder: {
        true: {
          borderWidth: 1.5,
          borderStyle: 'solid',
          borderColor: '$elementBorderSolid',
        },
      },
    },
  })
}
