import { forwardRef } from 'react'

import { Touchable, TouchableProps } from '@components/Touchable'

import { ChipRootStyles as Styles } from './styles'

type Props = TouchableProps & {
  selected?: boolean
}

export const ChipRoot = forwardRef<never, Props>(
  ({ children, selected = false, ...props }, ref) => {
    // TODO: Add animation on "selected" prop changed

    return (
      <Styles.Wrapper selected={selected}>
        <Touchable ref={ref} {...props}>
          <Styles.Content selected={selected}>{children}</Styles.Content>
        </Touchable>
      </Styles.Wrapper>
    )
  },
)

ChipRoot.displayName = 'ChipRoot'
