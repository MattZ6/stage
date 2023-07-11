import { ReactNode } from 'react'

import { ExtendButtonTrailingStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function ExtendButtonTrailing(props: Props) {
  return <Styles.Container {...props} />
}
