import { styled } from '@styles/stitches.config'

export namespace FieldInputStyles {
  export const Input = styled('TextInput', {
    flex: 1,

    fontFamily: '$regular',
    fontSize: '$sm',
    lineHeight: '$sm',
    color: '$textHighContrast',

    paddingHorizontal: '$base',

    borderRadius: 4,

    height: 44,
  }).attrs(({ theme }) => ({
    placeholderTextColor: theme.colors.textLowContrast,
    cursorColor: theme.colors.textHighContrast,
  }))
}
