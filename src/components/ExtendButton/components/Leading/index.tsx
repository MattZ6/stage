import { ReactNode } from 'react'

import { ExtendButtonLeadingStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function ExtendButtonLeading(props: Props) {
  return <Styles.Container {...props} />
}
