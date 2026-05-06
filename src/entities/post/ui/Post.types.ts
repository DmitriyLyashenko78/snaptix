import type { ReactNode } from 'react'

export type PostProps = {
  id: number
  userName: string
  description: string
  images: Image[]
  cover: string
  avatarOwner: string
  createdAt: string
  owner: OwnerInfo
  avatarWhoLikes: Array<string>
}

export type Image = {
  url: string
  width: number
  height: number
  fileSize: number
  createdAt: string
  uploadId: string
}

type OwnerInfo = {
  firstName: string
  lastName: string
}

export type PostLayoutProps = {
  images: Image[]
  children: ReactNode
  variant: 'small' | 'large' // 'small' для ленты, 'large' для модалки
}
