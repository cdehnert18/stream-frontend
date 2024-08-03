<script setup lang="ts">
import ModalComponent from './ModalComponent.vue'
</script>

<template>
  <nav class="navbar navbar-expand w-100">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">stream</a>

      <!-- Search Bar -->
      <input
        class="form-control me-4 flex-grow-1"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />

      <!-- Navigation Links -->
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/upload" class="nav-link" active-class="active">Upload</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/profile" class="nav-link" active-class="active">Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/settings" class="nav-link" active-class="active">Settings</router-link>
        </li>
        <li class="nav-item">
          <button
            class="btn btn-outline-primary mx-2"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop">
            Login
          </button>
        </li>
      </ul>
    </div>
  </nav>
  <ModalComponent />
</template>

<script lang="ts">
export default {
  name: 'NavigationComponent',
  components: {
    ModalComponent, // Registriere die Modal-Komponente
  },
}
</script>
