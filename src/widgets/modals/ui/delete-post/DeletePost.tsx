'use client'

import { ModalLayout } from '@/widgets/modals/ui/ModalLayout'
import { useDeleteMyPostMutation } from '@/features/delete-post/hooks/use-delete-my-post-mutation'
import { useTranslations } from '@/shared/lib/i18n/TranslationsProvider'

type DeletePost = {
  userPostId: string
  onClose: () => void
  onSuccessDelete: () => void
}

export const DeletePost = ({ userPostId, onClose, onSuccessDelete }: DeletePost) => {
  const { mutate, isPending } = useDeleteMyPostMutation()

  const dict = useTranslations()

  const handleDeletePost = () => {
    mutate(userPostId, {
      onSuccess: () => {
        onSuccessDelete()
      },
    })
  }

  return (
    <ModalLayout title={dict.deletePost.title} onClose={onClose} onConfirm={handleDeletePost} isPending={isPending}>
      {dict.deletePost.body}
    </ModalLayout>
  )
}
