import {
  BottomSheetContent,
  BottomSheetDragHandler,
  BottomSheetRoot,
  BottomSheetOverlay,
} from './components'

import { BottomSheetProvider } from './context'

export namespace BottomSheet {
  export const Provider = BottomSheetProvider
  export const Root = BottomSheetRoot
  export const Overlay = BottomSheetOverlay
  export const Content = BottomSheetContent
  export const DragHandler = BottomSheetDragHandler
}
