import { FadeInUp, FadeOutUp } from 'react-native-reanimated'

import { FieldErrorStyles as Styles } from './styles'

// const INITIAL_VALUE = 4

type Props = {
  message?: string
}

export function FieldError({ message }: Props) {
  // const translateY = useSharedValue(INITIAL_VALUE)

  // // const animatedStyles = useAnimatedStyle(() => {
  // //   return {
  // //     opacity: interpolate(
  // //       translateY.value,
  // //       [0, INITIAL_VALUE],
  // //       [1, 0],
  // //       Extrapolation.EXTEND,
  // //     ),
  // //     transform: [
  // //       {
  // //         translateY: withTiming(translateY.value, {
  // //           duration: 200,
  // //           easing: Easing.ease,
  // //         }),
  // //       },
  // //     ],
  // //   }
  // // }, [])

  // useCallback(() => {
  //   if (message) {
  //     translateY.value = 0
  //   } else {
  //     translateY.value = INITIAL_VALUE
  //   }
  // }, [translateY, message])

  return (
    <Styles.Container>
      {message && (
        <Styles.Text
          entering={FadeInUp.duration(200)}
          exiting={FadeOutUp.duration(200)}
        >
          {message}
        </Styles.Text>
      )}
    </Styles.Container>
  )
}
