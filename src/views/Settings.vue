<template>
  <div class="container my-5">
    <h1 class="mb-4">Settings</h1>
    <div class="container">
      <div class="row">
        <div class="col">
          <label class="form-check-label" for="darkModeSwitch"> Dark Mode </label>
        </div>
        <div class="col">
          <!-- Dark Mode Switch -->
          <div class="form-check form-switch mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              id="darkModeSwitch"
              v-model="darkMode"
              @change="toggleDarkMode"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label>Language</label>
        </div>
        <div class="col">
          <!-- Language Selection Dropdown -->
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ selectedLanguage }}
            </button>
            <ul class="dropdown-menu">
              <li>
                <button class="dropdown-item" type="button" @click="setLanguage('English')">
                  English
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button" @click="setLanguage('Deutsch')">
                  German
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SettingsView',
  data() {
    return {
      darkMode: false,
      selectedLanguage: 'English'
    }
  },
  methods: {
    toggleDarkMode() {
      const theme = this.darkMode ? 'dark' : 'light'
      document.documentElement.setAttribute('data-bs-theme', theme)
      localStorage.setItem('darkMode', theme)
    },
    setLanguage(language: string) {
      this.selectedLanguage = language
      localStorage.setItem('language', language)
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('darkMode')
    if (savedTheme) {
      this.darkMode = savedTheme === 'dark'
      document.documentElement.setAttribute('data-bs-theme', savedTheme)
    }
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      this.selectedLanguage = savedLanguage
    }
  }
})
</script>
