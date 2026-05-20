import { ModalLayout } from '@/widgets/modals/ui/ModalLayout'

export const ConfirmChangePostModal = ({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) => {
  return (
    <ModalLayout title="Close Post" onClose={onClose} onConfirm={onConfirm} isPending={false}>
      <p style={{ padding: 0, lineHeight: '1.5' }}>
        Do you really want to finish editing?
        <br />
        If you close the changes you have made will not be saved
      </p>
    </ModalLayout>
  )
}
