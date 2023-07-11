import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import ArrowRight from 'phosphor-react-native/src/icons/ArrowRight'
import UserCirclePlus from 'phosphor-react-native/src/icons/UserCirclePlus'

import { ExtendButton } from '@components/ExtendButton'

import { WelcomeScreenStyles as Styles, ButtonStyles } from './styles'

export function WelcomeScreen() {
  return (
    <>
      <StatusBar style="light" />

      <Styles.Container>
        <Styles.Header
          source={{
            cache: 'force-cache',
            uri: 'https://images.unsplash.com/photo-1556340346-5e30da977c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
          }}
        >
          <Styles.Gradient>
            <Styles.Title>Pronto pro Rock?</Styles.Title>
          </Styles.Gradient>
        </Styles.Header>

        <Styles.Footer>
          <Link href="/home" asChild>
            <ExtendButton.Root>
              <ExtendButton.Leading>
                <UserCirclePlus color="white" weight="bold" size={20} />
              </ExtendButton.Leading>

              <ExtendButton.Text>Criar uma conta agora mesmo</ExtendButton.Text>

              <ExtendButton.Trailing>
                <ArrowRight color="white" weight="bold" size={20} />
              </ExtendButton.Trailing>
            </ExtendButton.Root>
          </Link>

          <ExtendButton.Root>
            <ExtendButton.Text>Já tenho uma conta</ExtendButton.Text>
          </ExtendButton.Root>

          <Link href="/music-styles" asChild>
            <ExtendButton.Root>
              <ExtendButton.Text>Ver estilos musicais</ExtendButton.Text>

              <ExtendButton.Trailing>
                <ArrowRight color="white" weight="bold" size={20} />
              </ExtendButton.Trailing>
            </ExtendButton.Root>
          </Link>

          <Styles.AppVersion>v0.0.0</Styles.AppVersion>
        </Styles.Footer>
      </Styles.Container>
    </>
  )
}
