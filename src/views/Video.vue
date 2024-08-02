<script setup lang="ts">
import Comment from '../components/Comment.vue'
</script>

<template>
  <div class="container my-5">
    <div class="row mb-4">
      <!-- Video Section -->
      <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
        <div class="video-container">
          <video class="w-100" height="auto" controls>
            <source src="../../public/GC.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <!-- Video Details Section -->

      <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
        <div class="row justify-content-between">
          <div class="col-lg-12 col-md-12 col-sm-auto col-auto">
            <div class="video-details">
              <h3 class="mb-3">Beispieltitel</h3>
              <p class="mb-2 text-muted">Beispielbeschreibung</p>
              <p class="text-muted">Posted by <strong>Beispielusername</strong></p>
            </div>
          </div>

          <div class="col-lg-12 col-md-12 col-sm-auto col-auto">
            <button class="btn btn-primary">Like</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Comments Section -->
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
        <Comment />
        <Comment />
        <Comment />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
        <Comment />
        <Comment />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'VideoView'
}
</script>
