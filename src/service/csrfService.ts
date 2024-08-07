const API_URL = 'https://localhost:8080/api/'

let csrfToken: string | null = null

export async function fetchCsrfToken(): Promise<string> {
  try {
    const response = await fetch(API_URL + 'auth/csrf', {
      method: 'GET',
      credentials: 'include'
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch CSRF token: ${response.statusText}`)
    }

    csrfToken = response.headers.get('CSRF-TOKEN')

    if (!csrfToken) {
      console.log(response.headers);
      throw new Error('CSRF token not found in response headers.')
    }

    console.log(`CSRF Token fetched: ${csrfToken}`)
    return csrfToken
  } catch (error) {
    console.error('Error fetching CSRF token:', error)
    throw error
  }
}

export function getCsrfToken(): string | null {
  return csrfToken
}
