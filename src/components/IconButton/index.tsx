import { ReactNode } from 'react'
import { VariantProps } from 'stitches-native'

import { TouchableProps } from '@components/Touchable'

import { IconButtonStyles as Styles } from './styles'

type Props = TouchableProps &
  VariantProps<typeof Styles.Content> & {
    children: ReactNode
  }

export function IconButton({ children, variant, ...props }: Props) {
  return (
    <Styles.Wrapper>
      <Styles.Button {...props}>
        <Styles.Content variant={variant}>
          <>{children}</>
        </Styles.Content>
      </Styles.Button>
    </Styles.Wrapper>
  )
}
