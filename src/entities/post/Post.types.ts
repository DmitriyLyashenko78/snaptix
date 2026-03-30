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

type Image = {
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
