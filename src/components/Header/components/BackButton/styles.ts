import ArrowLeft from 'phosphor-react-native/src/icons/ArrowLeft'

import { styled } from '@styles/stitches.config'

export namespace HeaderBackButtonStyles {
  export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.colors.textLowContrast,
    weight: 'bold',
  }))
}
