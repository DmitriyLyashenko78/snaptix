export type ApiErrorItem = {
  status: number
  code: string
  field: string | null
  message: string
}

export type ApiError = {
  errors: ApiErrorItem[]
}

export const baseFetch = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  })

  const isNoContent = res.status === 204 || res.status === 201
  const data = isNoContent ? ({} as T) : await res.json()

  if (!res.ok) {
    throw data as ApiError
  }
  return data
}
