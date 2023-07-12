import { createStitches } from 'stitches-native'

const { styled, useTheme } = createStitches({
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

      textLowContrast: '#9BA1A6',
      textHighContrast: '#ECEDEE',

      ctaBackgroundSolid: '#ECEDEE',
      ctaTextSolid: '#151718',

      backdropOverlay: 'rgba(0, 0, 0, 0.82)',
    },

    fonts: {
      regular: 'Inter_400Regular',
      semiBold: 'Inter_600SemiBold',
      bold: 'Inter_700Bold',
    },

    fontSizes: {
      xxl: 48,
      xl: 32,
      lg: 24,
      md: 20,
      base: 16,
      sm: 14,
      xs: 12,
    },

    lineHeights: {
      xxl: 64,
      xl: 48,
      lg: 32,
      md: 32,
      base: 24,
      sm: 24,
      xs: 20,
    },

    space: {
      xl: 40,
      lg: 32,
      md: 24,
      base: 16,
      sm: 8,
    },

    radii: {
      full: 1000,
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

export { styled, useTheme }
