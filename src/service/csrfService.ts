class CsrfTokenService {
  private csrfToken: string | null = null;

  public async initCsrf() {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + '/auth/csrf', {
        method: 'GET',
        credentials: 'include'
      })
  
      if (!response.ok) {
        throw new Error(`Failed to fetch CSRF token: ${response.statusText}`)
      }
  
      this.csrfToken = response.headers.get('CSRF-TOKEN')
  
      if (!this.csrfToken) {
        console.log(response.headers);
        throw new Error('CSRF token not found in response headers.')
      }
  
    } catch (error) {
      console.error('Error fetching CSRF token:', error)
      throw error
    }
  }

  public getCsrfToken(): string {
    if (!this.csrfToken) {
      throw new Error('CSRF token not in storage.')
    }

    return this.csrfToken;
  }

  public setCsrfToken(token: string): void {
    this.csrfToken = token;
  }
}

export default new CsrfTokenService();