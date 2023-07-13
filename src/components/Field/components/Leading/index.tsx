import { ReactNode } from 'react'

import { FieldLeadingStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function FieldLeading(props: Props) {
  return <Styles.Container {...props} />
}
