import csrfTokenService from './csrfService'

interface ApiResponse<T> {
  apiResponseStatus: string
  message: string
  data: T
  timestamp: string
}

export async function uploadVideo(formData: FormData): Promise<ApiResponse<null>> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/videos/upload`, {
    method: 'POST',
    headers: {
      'X-CSRF-TOKEN': csrfTokenService.getCsrfToken()
    },
    body: formData,
    credentials: 'include'
  })

  if (!response.ok) {
    throw new Error('Failed to upload video')
  }

  return await response.json()
}
