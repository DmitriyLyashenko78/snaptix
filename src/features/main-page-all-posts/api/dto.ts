import type { Post } from '@/entities/post/ui/Post.types'

export type PostsRequestDto = {
  pageSize?: number
}

export type PostOwner = {
  firstName: string
  lastName: string
  avatar: string | null
}

export type LatestPost = Post & {
  owner: PostOwner
}

export type LatestPostsResponseDto = {
  posts: LatestPost[]
}

export type RegisteredUsersCountResponseDto = {
  registeredUsersCount: number
}
