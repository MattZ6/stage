import { TextProps } from 'react-native'

import { ButtonTextStyles as Styles } from './styles'

type Props = TextProps

export function ButtonText(props: Props) {
  return <Styles.Text {...props} />
}
