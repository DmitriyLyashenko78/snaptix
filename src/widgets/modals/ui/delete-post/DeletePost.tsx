'use client'
import { ModalLayout } from '@/widgets/modals/ui/ModalLayout'
import { useDeleteMyPostMutation } from '@/features/delete-post/hooks/use-delete-my-post-mutation'

export const DeletePost = ({ userPostId, onClose }: { userPostId: string; onClose: () => void }) => {
  const { mutate } = useDeleteMyPostMutation()

  const handleDeletePost = () => mutate(userPostId)

  return (
    <ModalLayout title="Delete SmallPost" onClose={onClose} onConfirm={handleDeletePost} isPending={false}>
      Are you sure that want to delete this post?
    </ModalLayout>
  )
}
