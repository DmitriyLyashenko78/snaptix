'use client'
import { ModalLayout } from '@/widgets/modals/ui/ModalLayout'

export const DeletePost = ({ userPostId, onClose }: { userPostId: string; onClose: () => void }) => {
  console.log(userPostId)

  const handleDeletePost = () => {
    //todo: эндпоинт удаления поста
  }

  return (
    <ModalLayout title="Delete Post" onClose={onClose} onConfirm={handleDeletePost} isPending={false}>
      Are you sure that want to delete this post?
    </ModalLayout>
  )
}
