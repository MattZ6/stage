import { forwardRef } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { FieldInputStyles as Styles } from './styles'

type Props = TextInputProps

export const FieldInput = forwardRef<TextInput, Props>((props, ref) => (
  <Styles.Input ref={ref} {...props} />
))

FieldInput.displayName = 'FieldInput'
