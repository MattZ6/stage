import { styled } from '@styles/stitches.config'

export namespace ButtonRootStyles {
  export const Wrapper = styled('View', {
    borderRadius: '$full',
    overflow: 'hidden',
  })

  export const Content = styled('View', {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$space$sm',

    paddingHorizontal: '$base',

    height: 48,

    backgroundColor: '$ctaBackgroundSolid',
  })
}
