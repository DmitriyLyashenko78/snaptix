export type UploadPostImageResponseDto = {
  uploadId: string
  url: string
}

export type CreatePostRequestDto = {
  description: string
  childrenMetadata: Array<{ uploadId: string }>
}

export type CreatePostResponseDto = {
  id: number
  description: string
  images: Array<{ url: string }>
  createdAt: string
}
