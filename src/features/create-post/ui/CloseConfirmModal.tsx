'use client'

import { Modal } from '@/shared/ui/modalsPost/Modal'
import { Button } from '@/shared/ui/button/Button'

type Props = {
  open: boolean
  onDiscardAction: () => void
  onSaveDraftAction: () => void
}

export const CloseConfirmModal = ({ open, onDiscardAction, onSaveDraftAction }: Props) => (
  <Modal
    open={open}
    onOpenChangeAction={() => {}}
    title="Close"
    footer={
      <>
        <Button variant="outline" width="auto" onClick={onDiscardAction}>
          Discard
        </Button>
        <Button variant="primary" width="auto" onClick={onSaveDraftAction}>
          Save draft
        </Button>
      </>
    }
  >
    <p>Do you really want to close the creation of a publication? If you close everything will be deleted</p>
  </Modal>
)
