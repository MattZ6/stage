import ArrowRight from 'phosphor-react-native/src/icons/ArrowRight'
import Eye from 'phosphor-react-native/src/icons/Eye'
import EyeSlash from 'phosphor-react-native/src/icons/EyeSlash'

import { styled } from '@styles/stitches.config'

export namespace SignUpScreenStyles {
  export const Container = styled('View', {
    flex: 1,
  })

  export const Content = styled('ScrollView', {
    flex: 1,
  }).attrs(({ theme }) => ({
    keyboardShouldPersistTaps: 'handled',
    keyboardDismissMode: 'on-drag',
    contentContainerStyle: {
      padding: theme.space.base,
      gap: theme.space.base,
    },
  }))

  export const Form = styled('View', {
    gap: '$space$xs',
  })

  export const Actions = styled('View', {
    alignItems: 'flex-end',
  })

  export const ArrowIcon = styled(ArrowRight).attrs(({ theme }) => ({
    size: 24,
    color: theme.colors.ctaTextSolid,
    weight: 'bold',
  }))

  export const EyeIcon = styled(Eye).attrs(({ theme }) => ({
    size: 24,
    color: theme.colors.textLowContrast,
    weight: 'bold',
  }))

  export const EyeSlashIcon = styled(EyeSlash).attrs(({ theme }) => ({
    size: 24,
    color: theme.colors.textLowContrast,
    weight: 'bold',
  }))
}
