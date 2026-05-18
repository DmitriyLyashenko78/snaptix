export type UploadPostImageResponseDto = {
  fileId: string
  url: string
}

export type CreatePostRequestDto = {
  description: string
  media: Array<{ fileId: string }>
}

export type CreatePostResponseDto = {
  id: string
  description: string | null
  media: Array<{ fileId: string; url: string }>
  updatedAt: string
  createdAt: string
}
