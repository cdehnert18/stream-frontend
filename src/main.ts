import './assets/global.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { fetchCsrfToken } from './service/csrfService';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)

//app.use(router)

//app.mount('#app')

async function initializeApp() {
  try {
    await fetchCsrfToken()
    console.log('CSRF token fetched successfully.')

    app.use(router)
  } catch (error) {
    console.error('Failed to initialize app:', error)
  }

  // Montiere die Anwendung
  app.mount('#app')
}

initializeApp()
