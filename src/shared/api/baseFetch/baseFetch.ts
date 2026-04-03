export type ApiError = {
  message: string
  statusCode?: number
}

export const baseFetch = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  })

  const isNoContent = res.status === 204
  const data = isNoContent ? {} : await res.json()

  if (!res.ok) {
    throw data as ApiError
  }
  return data
}
