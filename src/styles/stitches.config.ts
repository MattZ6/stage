import { createStitches } from 'stitches-native'

const { styled } = createStitches({
  theme: {
    colors: {
      backgroundSolid: '#151718',
      backgroundSubtle: '#1A1D1E',

      elementBackgroundSolid: '#202425',
      elementBackgroundHover: '#26292B',
      elementBackgroundActive: '#2B2F31',

      borderSubtle: '#313538',

      elementBorderSolid: '#3A3F42',
      elementBorderHover: '#4C5155',

      textHighContrast: '#ECEDEE',
      textLowContrast: '#9BA1A6',
    },
  },
  utils: {
    shadow: (level: 'small' | 'medium' | 'large') => {
      return {
        small: {
          elevation: 2,
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 3,
          shadowOpacity: 0.1,
          shadowColor: '#000000',
        },
        medium: {
          elevation: 5,
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 6,
          shadowOpacity: 0.2,
          shadowColor: '#000000',
        },
        large: {
          elevation: 10,
          shadowOffset: { width: 0, height: 6 },
          shadowRadius: 12,
          shadowOpacity: 0.4,
          shadowColor: '#000000',
        },
      }[level]
    },
  },
})

export { styled }
