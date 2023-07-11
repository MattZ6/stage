import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { WelcomeScreenStyles as Styles, ButtonStyles } from './styles'

export function WelcomeScreen() {
  return (
    <>
      <StatusBar style="light" />

      <Styles.Container>
        <Styles.Title>Pronto pro Rock?</Styles.Title>

        <Styles.Footer>
          <Link href="/home">
            <ButtonStyles.Container>
              <ButtonStyles.Title>Criar conta agora mesmo</ButtonStyles.Title>
            </ButtonStyles.Container>
          </Link>

          <Link href="/home">
            <ButtonStyles.Container>
              <ButtonStyles.Title>Já tenho uma conta</ButtonStyles.Title>
            </ButtonStyles.Container>
          </Link>
        </Styles.Footer>
      </Styles.Container>
    </>
  )
}
