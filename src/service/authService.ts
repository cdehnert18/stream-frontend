export interface LoginResponse {
  token: string
  user: {
    id: number
    name: string
    email: string
  }
}

export interface LoginData {
  email: string
  password: string
}

const API_URL = 'https://yourapi.com/api'

export async function login(loginData: LoginData): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })

    if (!response.ok) {
      throw new Error('Login failed')
    }

    const data: LoginResponse = await response.json()
    return data
  } catch (error) {
    console.error('Error during login:', error)
    throw error
  }
}
