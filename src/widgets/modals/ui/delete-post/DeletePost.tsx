'use client'
import { ModalLayout } from '@/widgets/modals/ui/ModalLayout'
import { useDeleteMyPostMutation } from '@/features/delete-post/hooks/use-delete-my-post-mutation'

type DeletePost = {
  userPostId: string
  onClose: () => void
  onSuccessDelete: () => void
}

export const DeletePost = ({ userPostId, onClose, onSuccessDelete }: DeletePost) => {
  const { mutate, isPending } = useDeleteMyPostMutation()

  const handleDeletePost = () => {
    mutate(userPostId, {
      onSuccess: () => {
        onSuccessDelete()
      },
    })
  }

  return (
    <ModalLayout title="Delete SmallPost" onClose={onClose} onConfirm={handleDeletePost} isPending={isPending}>
      Are you sure that want to delete this post?
    </ModalLayout>
  )
}
