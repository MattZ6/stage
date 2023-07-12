import { forwardRef } from 'react'

import { Touchable, TouchableProps } from '@components/Touchable'

import { ButtonRootStyles as Styles } from './styles'

type Props = TouchableProps

export const ButtonRoot = forwardRef<never, Props>(
  ({ children, ...props }, ref) => (
    <Styles.Wrapper>
      <Touchable ref={ref} {...props}>
        <Styles.Content>{children}</Styles.Content>
      </Touchable>
    </Styles.Wrapper>
  ),
)

ButtonRoot.displayName = 'ButtonRoot'
