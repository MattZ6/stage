import { ReactNode } from 'react'
import { Modal } from 'react-native'

import { useBottomSheet } from '@components/BottomSheet/hooks/useBottomSheet'

type Props = {
  isOpen: boolean
  children: ReactNode
}

export function BottomSheetRoot({ isOpen, children }: Props) {
  const { close } = useBottomSheet()

  return (
    <Modal
      visible={isOpen}
      onRequestClose={close}
      animationType="none"
      transparent
      statusBarTranslucent
    >
      {children}
    </Modal>
  )
}
