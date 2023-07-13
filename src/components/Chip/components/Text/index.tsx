import { TextProps } from 'react-native'

import { ChipTextStyles as Styles } from './styles'

type Props = TextProps

export function ChipText(props: Props) {
  return <Styles.Text {...props} />
}
