export type Media = {
  mediaId: string
  url: string
}

export type MyPost = {
  id: string
  description: string
  media: Media[]
  updatedAt: string
  createdAt: string
}

export type GetMyPostsResponseDto = {
  posts: MyPost[]
  nextCursorId: string | null
}

export type GetMyPostsRequestDto = {
  cursorId?: string
  pageSize?: number
}
