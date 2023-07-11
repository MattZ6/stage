import { ReactNode, forwardRef } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { ExtendButtonRootStyles as Styles } from './styles'

type Props = TouchableOpacityProps & {
  children: ReactNode
}

export const ExtendButtonRoot = forwardRef<TouchableOpacity, Props>(
  ({ children, ...props }, ref) => (
    <Styles.Container>
      <Styles.Touchable ref={ref} {...props} activeOpacity={0.6}>
        <Styles.Content>{children}</Styles.Content>
      </Styles.Touchable>
    </Styles.Container>
  ),
)

ExtendButtonRoot.displayName = 'ExtendButtonRoot'

// export function ExtendButtonRoot({ children, ...props }: Props) {
//   return (
//     <Styles.Container>
//       <Styles.Touchable {...props} activeOpacity={0.6}>
//         <Styles.Content>{children}</Styles.Content>
//       </Styles.Touchable>
//     </Styles.Container>
//   )
// }
