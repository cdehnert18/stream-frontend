<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import ModalComponent from './components/ImprintModal.vue'

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
  <div class="d-flex flex-column min-vh-100">
    <!-- Navigation-Komponente -->
    <Navigation />
    
    <!-- Main-Bereich, der den freien Platz einnimmt -->
    <main class="flex-grow-1 d-flex">
      <RouterView />
    </main>
    
    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row mb-2">
          <div class="col col d-flex justify-content-center align-items-center my-1">
            <a href="/#" class="link-light link-underline-opacity-0" data-bs-toggle="modal"
            data-bs-target="#imprintModal">Imprint</a>
          </div>
          <div class="col col d-flex justify-content-center align-items-center my-1">
            <a href="/cookies" class="link-light link-underline-opacity-0">Cookies</a>
          </div>
          <div class="col col d-flex justify-content-center align-items-center my-1">
            <a href="/privacy" class="link-light link-underline-opacity-0">Privacy</a>
          </div>
          <div class="col col d-flex justify-content-center align-items-center my-1">
            <a href="/about" class="link-light link-underline-opacity-0">About</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <ModalComponent/>
</template>
