import { ReactNode } from 'react'

import { ButtonLeadingStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function ButtonLeading(props: Props) {
  return <Styles.Container {...props} />
}
