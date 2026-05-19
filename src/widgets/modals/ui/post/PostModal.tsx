'use client'

import { useState } from 'react'
import { PostLayout } from '@/entities/post/ui/PostLayout'
import s from './PostModal.module.css'
import Image from 'next/image'
import type { PostProps } from '@/entities/post/ui/Post.types'
import { useModal } from '@/shared/hooks/useModal'
import { Button } from '@/shared/ui/button/Button'
import { TextArea } from '@/shared/ui/text-area/TextArea'
import { CrossWhiteIcon } from '@/shared/ui/svg/Icon'
import { ConfirmChangePostModal } from '@/widgets/modals/ui/confirm-change-post/ConfirmChangePost'
import { useChangePostDescriptMutation } from '@/widgets/modals/ui/post/api/hooks/use-change-post-descript-mutation'

type PostModal = {
  postId: string
  isOpen: boolean
  onClose: () => void
} & PostProps

export const PostModal = ({ images, avatarOwner, userName, description, isOpen, onClose, postId }: PostModal) => {
  const [currentDescription, setCurrentDescription] = useState(description)
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)

  const { mutateAsync: updatePostDescript, isPending } = useChangePostDescriptMutation()
  const isNewText = currentDescription !== description

  const handleCloseConfirm = () => {
    if (isNewText) {
      setIsConfirmOpen(true)
    } else {
      onClose()
    }
  }

  const handleSaveChangeDescription = async () => {
    try {
      await updatePostDescript({ postId, description: currentDescription })
      onClose()
    } catch (error) {
      console.error('Failed to update description:', error)
    }
  }

  const modalRef = useModal({ isOpen, onClose: handleCloseConfirm })

  if (!isOpen) return null

  return (
    <>
      <div className={s.overlay}>
        <div className={s.modalContent} ref={modalRef} tabIndex={-1}>
          <section className={s.titleBlock}>
            <h1>Edit Post</h1>
            <button className={s.close} onClick={handleCloseConfirm}>
              <CrossWhiteIcon />
            </button>
          </section>
          <PostLayout variant={'large'} images={images}>
            <div className={s.editForm}>
              <section className={s.author}>
                <Image src={avatarOwner} alt={'user avatar'} width={36} height={36} className={s.avatar} />
                <h3>{userName}</h3>
              </section>
              <section className={s.description}>
                <label htmlFor="textArea" className={s.label}>
                  Add publication descriptions
                </label>
                <TextArea value={currentDescription} onValueChange={setCurrentDescription} maxLength={500} />
                <div className={s.charCount}>{currentDescription.length} / 500</div>
              </section>
              <div className={s.save}>
                <Button
                  width={'auto'}
                  variant={'primary'}
                  onClick={handleSaveChangeDescription}
                  disabled={isPending || !isNewText}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </PostLayout>
        </div>
      </div>

      {isConfirmOpen && (
        <ConfirmChangePostModal
          onConfirm={() => {
            setIsConfirmOpen(false)
            onClose()
          }}
          onClose={() => setIsConfirmOpen(false)}
        />
      )}
    </>
  )
}
