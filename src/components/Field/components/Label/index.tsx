import { FieldLabelStyles as Styles } from './styles'

type Props = {
  children: string
}

export function FieldLabel(props: Props) {
  return <Styles.Text {...props} />
}
