<template>
  <div class="container my-5">
    <h1 class="mb-4">Upload</h1>
    <div class="container">
      <form @submit.prevent="handleUpload">
        <!-- Row for Video and Thumbnail Upload -->
        <div class="row mb-3">
          <!-- Video Upload -->
          <div class="col-md-6">
            <div class="mb-3">
              <label for="videoFile" class="form-label">Upload Video</label>
              <input
                type="file"
                class="form-control"
                id="videoFile"
                name="videoFile"
                accept="video/mp4"
                @change="onVideoChange"
                required
              />
              <div class="invalid-feedback">Please upload a video file.</div>
            </div>
          </div>

          <!-- Thumbnail Upload -->
          <div class="col-md-6">
            <div class="mb-3">
              <label for="thumbnailFile" class="form-label">Upload Thumbnail</label>
              <input
                type="file"
                class="form-control"
                id="thumbnailFile"
                name="thumbnailFile"
                accept="image/*"
                @change="onThumbnailChange"
                required
              />
              <div class="invalid-feedback">Please upload a thumbnail image.</div>
            </div>
          </div>
        </div>

        <!-- Row for Video Title -->
        <div class="row mb-3">
          <div class="col">
            <div class="mb-3">
              <label for="videoTitle" class="form-label">Video Title</label>
              <input
                type="text"
                class="form-control"
                id="videoTitle"
                name="videoTitle"
                placeholder="Enter video title"
                v-model="videoTitle"
                required
              />
              <div class="invalid-feedback">Please provide a title for the video.</div>
            </div>
          </div>
        </div>

        <!-- Row for Video Description -->
        <div class="row mb-3">
          <div class="col">
            <div class="mb-3">
              <label for="videoDescription" class="form-label">Video Description</label>
              <textarea
                class="form-control"
                id="videoDescription"
                name="videoDescription"
                rows="4"
                placeholder="Enter video description"
                v-model="videoDescription"
                required
              ></textarea>
              <div class="invalid-feedback">Please provide a description for the video.</div>
            </div>
          </div>
        </div>

        <!-- Row for Submit Button -->
        <div class="row mb-3">
          <div class="col">
            <button type="submit" class="btn btn-primary">Upload</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { uploadVideo } from '@/service/videoService'

export default {
  name: 'UploadView',
  data() {
    return {
      videoTitle: '',
      videoDescription: '',
      videoFile: null as File | null,
      thumbnailFile: null as File | null
    }
  },
  methods: {
    onVideoChange(event: Event) {
      const target = event.target as HTMLInputElement
      const files = target.files
      if (files && files.length > 0) {
        this.videoFile = files[0]
      }
    },
    onThumbnailChange(event: Event) {
      const target = event.target as HTMLInputElement
      const files = target.files
      if (files && files.length > 0) {
        this.thumbnailFile = files[0]
      }
    },
    async handleUpload() {
      if (this.videoFile === null || this.thumbnailFile === null) throw new Error('Upload failed')
      const formData = new FormData()
      formData.append('videoFile', this.videoFile)
      formData.append('thumbnailFile', this.thumbnailFile)
      formData.append('videoTitle', this.videoTitle)
      formData.append('videoDescription', this.videoDescription)

      // Übergebe das FormData-Objekt an die Upload-Funktion
      const response = await uploadVideo(formData)
      console.log(response)
    }
  }
}
</script>
