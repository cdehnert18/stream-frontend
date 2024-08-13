import './assets/global.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import csrfTokenService from './service/csrfService'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap'

const app = createApp(App)

async function initializeApp() {
  try {
    await csrfTokenService.initCsrf()

    app.use(router)
  } catch (error) {
    console.error('Failed to initialize app:', error)
  }
  app.mount('#app')
}

initializeApp()
