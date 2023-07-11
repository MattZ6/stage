import { styled } from '@styles/stitches.config'

export namespace MusicStylesSelectScreenStyles {
  export const Container = styled('View', {
    flex: 1,
    backgroundColor: '$backgroundSolid',
  })

  export const Content = styled('View', {
    flex: 1,
    padding: 16,
  })

  export const Header = styled('View', {
    gap: 4,
  })

  export const Title = styled('Text', {
    fontFamily: '$bold',
    fontSize: 24,
    color: '$textHighContrast',
  })

  export const Description = styled('Text', {
    fontFamily: '$regular',
    fontSize: 16,
    color: '$textLowContrast',
  })
}
