<script setup lang="ts">
import AuthModal from '../components/AuthModal.vue'
</script>

<template>
  <div class="container my-5">
    <h1 class="mb-4">Home</h1>
    <AuthModal />
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeView'
}
</script>
