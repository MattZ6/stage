import { ExtendButtonTextStyles as Styles } from './styles'

type Props = {
  children: string
}

export function ExtendButtonText({ children }: Props) {
  return <Styles.Text>{children} </Styles.Text>
}
