import { HeaderTitleStyles as Styles } from './styles'

type Props = {
  children: string
}

export function HeaderTitle(props: Props) {
  return <Styles.Text {...props} />
}
