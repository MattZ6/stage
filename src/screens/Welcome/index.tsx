import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@components/Button'

// Foto de <a href="https://unsplash.com/@kyalloni?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kevin Yudhistira Alloni</a> na <a href="https://unsplash.com/pt-br/fotografias/sol7vhs8Pdg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

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
        <Styles.Header source={require('@assets/background.jpg')}>
          <Gradient>
            <Styles.Title>{t('title')}</Styles.Title>
          </Gradient>
        </Styles.Header>

        <Styles.Content>
          <Styles.Links>
            <Link href="/sign-up" asChild>
              <Button.Root>
                <Button.Text>{t('links.create_account')}</Button.Text>
              </Button.Root>
            </Link>

            <Link href="/sign-in" asChild>
              <Button.Root>
                <Button.Text>{t('links.sign_in')}</Button.Text>
              </Button.Root>
            </Link>
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
