import { ReactNode } from 'react'

import { ButtonTrailingStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function ButtonTrailing(props: Props) {
  return <Styles.Container {...props} />
}
