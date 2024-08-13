<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type Video, latestVideos } from '@/service/videoService'

const thumbnailList = ref<Video[]>([])

onMounted(async () => {
  try {
    const videos = await latestVideos()
    thumbnailList.value = videos
  } catch (error) {
    console.error('Failed to fetch latest videos:', error)
  }
})
</script>

<template>
  <div class="container my-5">
    <h1 class="mb-4">Home</h1>
    <div class="row">
      <div v-for="(item, index) in thumbnailList" :key="index" class="col">
        <div class="thumbnail"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.thumbnail {
  height: 90px;
  width: 160px;
  background-color: red;
}
</style>
