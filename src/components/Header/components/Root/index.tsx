import { ReactNode } from 'react'

import { HeaderRootStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function HeaderRoot(props: Props) {
  return <Styles.Container {...props} />
}
