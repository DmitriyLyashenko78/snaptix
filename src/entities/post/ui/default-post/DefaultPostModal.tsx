'use client'

import { useState } from 'react'

import Image from 'next/image'
import s from './DefaultPostModal.module.css'
import { getPostCreatedTime } from '@/shared/utils/getPostCreatedTime'
import defaultAvatar from '@/public/png/userAvatar.png'
import { PostLayout } from '@/entities/post/ui/PostLayout'
import { CrossWhiteIcon, FavoriteIcon, HeartIcon, HeartRedIcon, PaperPlaneIcon } from '@/shared/ui/svg/Icon'
import avatar2 from '@/public/png/flagRussia.png'
import type { Post } from '@/entities/post/ui/Post.types'
import { CommentItem } from '@/entities/post/ui/default-post-modal-comment/DefaultPostModalComment'
import { ChangeMenuPostModal } from '@/widgets/modals/ui/change-menu-post-modal/ChangeMenuPostModal'
import { PostDescriptionModal } from '@/widgets/modals/ui/post/PostDescriptionModal'
import { DeletePost } from '@/widgets/modals/ui/delete-post/DeletePost'

type DefaultPostProps = {
  post: Post
  userName: string
  avatarOwner?: string
  onClose: () => void
}

export const DefaultPostModal = ({ post, userName, avatarOwner, onClose }: DefaultPostProps) => {
  const [isLikedByAuthor, setIsLikedByAuthor] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  const toggleLikeHandler = () => setIsLikedByAuthor((prev) => !prev)

  const userAvatar = avatarOwner ? avatarOwner : defaultAvatar

  const formattedDate = post.createdAt ? getPostCreatedTime(post.createdAt) : 'Just now'

  const postImages = post.media?.map((m) => ({ url: m.url, mediaId: m.mediaId }))

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const mockComments = [
    {
      id: 1,
      commentUserName: 'OtherUser',
      commentText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      commentTime: '1 hours ago',
      avatar: defaultAvatar.src,
    },
    {
      id: 2,
      commentUserName: userName,
      commentText: 'Спасибо за комментарии!',
      commentTime: '2 hour ago',
      avatar: userAvatar,
      isAuthor: true,
    },
    {
      id: 3,
      commentUserName: 'Федот',
      commentText:
        'Lorem ipsum dolor sit amlor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      commentTime: '2 hours ago',
      avatar: defaultAvatar,
    },
  ]

  return (
    <>
      <div className={s.overlay} onClick={handleOverlayClick}>
        <button className={s.closeOutside} onClick={onClose}>
          <CrossWhiteIcon />
        </button>

        <div className={s.modalContent} onClick={(e) => e.stopPropagation()} tabIndex={-1}>
          <PostLayout variant={'large'} images={postImages}>
            <div className={s.wrapper}>
              <header className={s.authorHeader}>
                <div className={s.authorInfo}>
                  <Image src={userAvatar} alt={'user avatar'} width={36} height={36} className={s.avatar} />
                  <span className={s.userHeaderName}>{userName}</span>
                </div>
                <ChangeMenuPostModal onEdit={() => setIsEditOpen(true)} onDelete={() => setIsDeleteOpen(true)} />
              </header>

              <section className={s.commentsArea}>
                {/* Описание поста автора */}
                {post.description && (
                  <CommentItem
                    authorUserName={userName}
                    commentUserName={userName}
                    commentText={post.description}
                    commentTime={formattedDate}
                    avatar={userAvatar}
                    isPostDescription={true}
                  />
                )}

                {/* Промапливаем комментарии */}
                {mockComments.map((comment) => (
                  <CommentItem
                    key={comment.id}
                    authorUserName={userName}
                    commentUserName={comment.commentUserName}
                    commentText={comment.commentText}
                    commentTime={comment.commentTime}
                    avatar={comment.avatar}
                  />
                ))}
              </section>

              <footer className={s.footer}>
                <div className={s.postActions}>
                  <div className={s.engagementBar}>
                    <button
                      className={`${s.heartButton} ${isLikedByAuthor ? s.liked : ''}`}
                      onClick={toggleLikeHandler}
                    >
                      {isLikedByAuthor ? <HeartRedIcon /> : <HeartIcon />}
                    </button>
                    <PaperPlaneIcon />
                  </div>
                  <FavoriteIcon />
                </div>

                <section>
                  <div className={s.likesWrapper}>
                    <div className={s.iconsWrapper}>
                      <Image className={s.stackedImage} src={userAvatar} alt="avatar 1" width={24} height={24} />
                      <Image className={s.stackedImage} src={defaultAvatar} alt="avatar 2" width={24} height={24} />
                      <Image className={s.stackedImage} src={avatar2} alt="avatar 3" width={24} height={24} />
                    </div>
                    <span className={s.likesCount}>2243 &ldquo;Likes&rdquo;</span>
                  </div>
                </section>

                <div className={s.postDate}>July 3, 2021</div>

                <div className={s.addCommentForm}>
                  <input type="text" placeholder="Add a Comment..." className={s.commentInput} />
                  <button type="button" className={s.publishButton}>
                    Publish
                  </button>
                </div>
              </footer>
            </div>
          </PostLayout>
        </div>
      </div>
      {isEditOpen && (
        <div onClick={(e) => e.stopPropagation()}>
          <PostDescriptionModal
            {...post}
            isOpen={isEditOpen}
            avatarOwner={avatarOwner}
            onClose={() => setIsEditOpen(false)}
          />
        </div>
      )}
      {isDeleteOpen && (
        <div onClick={(e) => e.stopPropagation()}>
          <DeletePost userPostId={post.id} onClose={() => setIsDeleteOpen(false)} />
        </div>
      )}
    </>
  )
}
