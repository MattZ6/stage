import { useContext } from 'react'

import { BottomSheetContext } from '../context'

export function useBottomSheet() {
  return useContext(BottomSheetContext)
}
