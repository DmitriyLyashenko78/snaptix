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
  const data = await res.json()
  if (!res.ok) {
    throw data as ApiError
  }
  return data
}
