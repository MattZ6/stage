import { ReactNode } from 'react'
import { SharedValue } from 'react-native-reanimated'

export namespace BottomSheetContextTypes {
  export type Context = {
    contentHeight: SharedValue<number>
    translateY: SharedValue<number>
    close: () => void
  }
}

export namespace BottomSheetProviderTypes {
  export type Props = {
    onRequestClose: () => void
    children: ReactNode
  }
}
