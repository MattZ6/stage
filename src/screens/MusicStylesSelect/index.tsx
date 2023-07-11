import { Header } from '@components/Header'

import { MusicStylesSelectScreenStyles as Styles } from './styles'

export function MusicStylesSelectScreen() {
  return (
    <Styles.Container>
      <Header />

      <Styles.Content>
        <Styles.Header>
          <Styles.Title>Quais seus estilos preferidos?</Styles.Title>
          <Styles.Description>
            Isso vai te ajudar a encontrar músicos com gostos semelhantes
          </Styles.Description>
        </Styles.Header>
      </Styles.Content>
    </Styles.Container>
  )
}
