import csrfTokenService from './csrfService'

interface ApiResponse<T> {
  apiResponseStatus: string
  message: string
  data: T
  timestamp: string
}

export interface Email {
  email: string
  username: string
}

export interface Video {
  id: string
  title: string
  description: string
  video_path: string
  thumbnail_path: string
  upload_date: Date
  email: Email
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

export async function latestVideos(): Promise<Video[]> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/videos/latest-videos`, {
    method: 'GET',
    headers: {
      'X-CSRF-TOKEN': csrfTokenService.getCsrfToken()
    },
    credentials: 'include'
  })

  if (!response.ok) {
    throw new Error('Failed to get latest videos')
  }

  const jsonResponse: ApiResponse<Video[]> = (await response.json()) as ApiResponse<Video[]>

  return jsonResponse.data
}
