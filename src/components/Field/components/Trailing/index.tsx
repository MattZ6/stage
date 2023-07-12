import { ReactNode } from 'react'

import { FieldTrailingStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function FieldTrailing(props: Props) {
  return <Styles.Container {...props} />
}
