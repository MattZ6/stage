import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '@components/Button'
import { Field } from '@components/Field'
import { Header } from '@components/Header'
import { IconButton } from '@components/IconButton'

import { SignUpScreenStyles as Styles } from './styles'

export function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const { t } = useTranslation('sign-up')

  return (
    <Styles.Container>
      <Header.Root>
        <Header.BackButton />

        <Header.Title>{t('title')}</Header.Title>
      </Header.Root>

      <Styles.Content>
        <Styles.Form>
          <Field.Root>
            <Field.Label>{t('form.name.label')}</Field.Label>

            <Field.Content>
              <Field.Input
                placeholder={t('form.name.placeholder')}
                autoComplete="name"
                keyboardType="default"
                returnKeyType="next"
              />
            </Field.Content>

            <Field.Error message={error} />
          </Field.Root>

          <Field.Root>
            <Field.Label>{t('form.email.label')}</Field.Label>

            <Field.Content>
              <Field.Input
                placeholder={t('form.email.placeholder')}
                autoComplete="email"
                keyboardType="email-address"
                returnKeyType="next"
              />
            </Field.Content>

            <Field.Error message={error} />
          </Field.Root>

          <Field.Root>
            <Field.Label>{t('form.password.label')}</Field.Label>

            <Field.Content>
              <Field.Input
                secureTextEntry={!showPassword}
                placeholder={t('form.password.placeholder')}
                keyboardType={showPassword ? 'visible-password' : 'default'}
                returnKeyType="send"
              />

              <Field.Trailing>
                <IconButton
                  variant="transparent"
                  onPress={() => setShowPassword((state) => !state)}
                >
                  {showPassword ? <Styles.EyeIcon /> : <Styles.EyeSlashIcon />}
                </IconButton>
              </Field.Trailing>
            </Field.Content>

            <Field.Error message={error} />
          </Field.Root>
        </Styles.Form>

        <Styles.Actions>
          <Button.Root
            onPress={() =>
              setError((error) => {
                return error ? '' : 'Deu ruim'
              })
            }
          >
            <Button.Text>{t('form.button')}</Button.Text>
            <Button.Trailing>
              <Styles.ArrowIcon />
            </Button.Trailing>
          </Button.Root>
        </Styles.Actions>
      </Styles.Content>
    </Styles.Container>
  )
}
