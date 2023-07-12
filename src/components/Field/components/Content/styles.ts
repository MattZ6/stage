import { styled } from '@styles/stitches.config'

export namespace FieldContentStyles {
  export const Container = styled('View', {
    flexDirection: 'row',

    borderRadius: 6,

    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '$elementBorderSolid',

    backgroundColor: '$elementBackgroundSolid',
  })
}
