<script setup lang="ts">
import Comment from '../components/Comment.vue'
</script>

<template>
  <div class="container my-5">
    <h1 class="mb-4">Home</h1>
    <Comment />
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeView'
}
</script>
