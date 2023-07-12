import { useCallback, useState } from 'react'

import { BottomSheet } from '@components/BottomSheet'

import { LanguagesList, Trigger } from './components'

export function LanguageSelect() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenBottomSheet = useCallback(() => setIsModalOpen(true), [])

  const handleCloseBottomSheet = useCallback(() => setIsModalOpen(false), [])

  return (
    <>
      <Trigger onPress={handleOpenBottomSheet} />

      <BottomSheet.Provider onRequestClose={handleCloseBottomSheet}>
        <BottomSheet.Root isOpen={isModalOpen}>
          <BottomSheet.Overlay onBackdropPress={handleCloseBottomSheet} />

          <BottomSheet.Content>
            <BottomSheet.DragHandler />

            <LanguagesList />
          </BottomSheet.Content>
        </BottomSheet.Root>
      </BottomSheet.Provider>
    </>
  )
}
