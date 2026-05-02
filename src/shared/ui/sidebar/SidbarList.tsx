'use client'

import { useState } from 'react'
import { Sidebar } from './Sidebar'
import book1 from '@/public/img/testBook1.jpeg'
import book2 from '@/public/img/testBook2.jpg'
import book3 from '@/public/img/testBook3.jpeg'
import defaultPhoto from '@/public/img/defaultPhoto.jpg'
import s from './Sidebar.module.css'
import {
  CreateActiveIcon,
  CreateIcon,
  FavoriteActiveIcon,
  FavoriteIcon,
  HomeActiveIcon,
  HomeIcon,
  LogoutIcon,
  MessengerActiveIcon,
  MessengerIcon,
  ProfileActiveIcon,
  ProfileIcon,
  SearchIcon,
  StatsIcon,
} from '@/shared/ui/svg/Icon'
import { LogOutModal } from '@/widgets/modals'
import { PostModal } from '@/widgets/modals/ui/post/PostModal'
import { DeletePost } from '@/widgets/modals/ui/delete-post/DeletePost'
import { CreatePostModal } from '@/features/create-post'

export const SidebarList = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false)

  const mockPostData = {
    id: 1,
    images: [book1, book2, book3].map((img, index) => ({
      url: img.src,
      width: img.width,
      height: img.height,
      fileSize: 0,
      createdAt: new Date().toISOString(),
      uploadId: `mock-${index}`,
    })),
    cover: '',
    avatarOwner: defaultPhoto.src,
    owner: { firstName: 'User', lastName: 'Userov' },
    userName: 'User123',
    description: 'Initial server description',
    createdAt: '2023-01-01',
    avatarWhoLikes: [],
  }

  return (
    <>
      <Sidebar>
        <Sidebar.Item href="/feed" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />}>
          Feed
        </Sidebar.Item>
        <Sidebar.Item
          href="/create"
          icon={<CreateIcon />}
          activeIcon={<CreateActiveIcon />}
          onClick={() => setIsCreatePostOpen(true)}
        >
          Create
        </Sidebar.Item>
        <Sidebar.Item
          //todo: после проверки удалить
          href="#"
          onClick={() => setIsEditModalOpen(true)}
          icon={<CreateIcon />}
          activeIcon={<CreateActiveIcon />}
        >
          Edit Post
        </Sidebar.Item>
        <Sidebar.Item
          //todo: после проверки удалить
          href="#"
          onClick={() => setIsDeleteModalOpen(true)}
          icon={<CreateIcon />}
          activeIcon={<CreateActiveIcon />}
        >
          Delete Post
        </Sidebar.Item>
        <Sidebar.Item href="/profile" icon={<ProfileIcon />} activeIcon={<ProfileActiveIcon />}>
          My Profile
        </Sidebar.Item>
        <Sidebar.Item href="/messenger" icon={<MessengerIcon />} activeIcon={<MessengerActiveIcon />}>
          Messenger
        </Sidebar.Item>
        <Sidebar.Item href="/search" icon={<SearchIcon />}>
          Search
        </Sidebar.Item>

        <Sidebar.Item href="/stats" icon={<StatsIcon />} className={s.groupIndent}>
          Statistics
        </Sidebar.Item>
        <Sidebar.Item href="/favorites" icon={<FavoriteIcon />} activeIcon={<FavoriteActiveIcon />}>
          Favorites
        </Sidebar.Item>

        <Sidebar.Item href="#" onClick={() => setIsLogoutModalOpen(true)} icon={<LogoutIcon />} className={s.logout}>
          Log Out
        </Sidebar.Item>
      </Sidebar>

      {isLogoutModalOpen && <LogOutModal userId={'123'} onClose={() => setIsLogoutModalOpen(false)} />}
      {isEditModalOpen && (
        <PostModal
          {...mockPostData}
          key={mockPostData.id}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}
      {isDeleteModalOpen && <DeletePost userPostId={'123'} onClose={() => setIsDeleteModalOpen(false)} />}
      <CreatePostModal open={isCreatePostOpen} onClose={() => setIsCreatePostOpen(false)} />
    </>
  )
}
