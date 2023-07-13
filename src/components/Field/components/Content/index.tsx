import { ReactNode } from 'react'
import { VariantProps } from 'stitches-native'

import { FieldContentStyles as Styles } from './styles'

type Props = VariantProps<typeof Styles.Container> & {
  children: ReactNode
}

export function FieldContent(props: Props) {
  return <Styles.Container {...props} />
}
