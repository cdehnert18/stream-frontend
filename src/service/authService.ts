import csrfTokenService from './csrfService';

interface ApiResponse<T> {
  apiResponseStatus: string;
  message: string;
  data: T;
  timestamp: string;
}

interface LoginData {
  email: string
  password: string
}

interface RegistrationData {
  email: string
  username: string
  password: string
  passwordConfirm: string
}

export async function login(loginData: LoginData): Promise<ApiResponse<null>> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfTokenService.getCsrfToken()
      },
      body: JSON.stringify(loginData),
      credentials: "include"
    })

    if (!response.ok) {
      throw new Error('Login failed')
    }

    const data: ApiResponse<null> = await response.json()
    return data
  } catch (error) {
    console.error('Error during login:', error)
    throw error
  }
}

export async function register(registrationData: RegistrationData): Promise<ApiResponse<null>> {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfTokenService.getCsrfToken()
      },
      body: JSON.stringify(registrationData),
      credentials: "include"
    })

    if (!response.ok) {
      throw new Error('Registration failed')
    }

    const data: ApiResponse<null> = await response.json()
    return data
  } catch (error) {
    console.error('Error during registration:', error)
    throw error
  }
}
