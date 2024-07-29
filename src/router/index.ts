import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Upload from '../views/Upload.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ]
})

export default router
