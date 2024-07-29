<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'

const darkMode = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem('darkMode')
  if (savedTheme) {
    darkMode.value = savedTheme === 'dark'
    document.documentElement.setAttribute('data-bs-theme', savedTheme)
  }

  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage === null) {
    localStorage.setItem('language', 'English')
  }
})
</script>

<template>
  <Navigation />
  <RouterView />
</template>
