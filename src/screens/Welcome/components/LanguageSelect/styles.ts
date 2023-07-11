import Check from 'phosphor-react-native/src/icons/Check'
import Globe from 'phosphor-react-native/src/icons/Globe'
import { Dimensions } from 'react-native'

import { styled } from '@styles/stitches.config'

export namespace LanguageSelectStyles {
  export const Button = styled('TouchableOpacity', {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,

    paddingLeft: 8,
    paddingRight: 16,

    height: 40,
    borderRadius: 40,
    backgroundColor: '$backgroundSubtle',
  })

  export const Icon = styled(Globe).attrs(({ theme }) => ({
    color: theme.colors.textLowContrast,
    size: 20,
  }))

  export const Language = styled('Text', {
    fontFamily: '$regular',
    fontSize: 14,
    lineHeight: 24,
    color: '$textLowContrast',
  })
}

export namespace BottomSheetStyles {
  export const Overlay = styled('View', {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

    zIndex: 0,
  })

  export const Container = styled('View', {
    position: 'absolute',
    maxHeight: Dimensions.get('window').height * 0.8,
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: '$backgroundSubtle',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 16,

    zIndex: 1,
  })

  export const Button = styled('TouchableOpacity', {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,

    padding: 16,
  })

  export const Content = styled('View', {
    flex: 1,
  })

  export const Language = styled('Text', {
    fontFamily: '$semiBold',
    fontSize: 16,
    lineHeight: 24,
    color: '$textHighContrast',
  })

  export const Label = styled('Text', {
    fontFamily: '$regular',
    fontSize: 16,
    lineHeight: 24,
    color: '$textLowContrast',
  })

  export const CheckIcon = styled(Check).attrs(({ theme }) => ({
    color: theme.colors.textHighContrast,
    size: 24,
    weight: 'bold',
  }))
}
