import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import ArrowRight from 'phosphor-react-native/src/icons/ArrowRight'
import UserCirclePlus from 'phosphor-react-native/src/icons/UserCirclePlus'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { ExtendButton } from '@components/ExtendButton'

import { useTheme } from '@styles/stitches.config'

import { LanguageSelect } from './components'

import { WelcomeScreenStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

function Gradient(props: Props) {
  const theme = useTheme()

  return (
    <Styles.Gradient
      colors={['transparent', theme.colors.backgroundSolid]}
      locations={[0.2, 0.875]}
      {...props}
    />
  )
}

export function WelcomeScreen() {
  const { t } = useTranslation('welcome')

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
          <Gradient>
            <Styles.Title>{t('title')}</Styles.Title>
          </Gradient>
        </Styles.Header>

        <Styles.Content>
          <Styles.Links>
            <Link href="/home" asChild>
              <ExtendButton.Root>
                <ExtendButton.Leading>
                  <UserCirclePlus color="white" weight="bold" size={24} />
                </ExtendButton.Leading>

                <ExtendButton.Text>
                  {t('links.create_account')}
                </ExtendButton.Text>

                <ExtendButton.Trailing>
                  <ArrowRight color="white" weight="bold" size={24} />
                </ExtendButton.Trailing>
              </ExtendButton.Root>
            </Link>

            <ExtendButton.Root>
              <ExtendButton.Text>{t('links.sign_in')}</ExtendButton.Text>
            </ExtendButton.Root>
          </Styles.Links>

          <Styles.Footer>
            <LanguageSelect />

            <Styles.AppVersion>v0.0.0</Styles.AppVersion>
          </Styles.Footer>
        </Styles.Content>
      </Styles.Container>
    </>
  )
}
