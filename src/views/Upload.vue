<template>
  <div class="container my-5">
    <h1 class="mb-4">Upload</h1>
    <div class="container">
      <form>
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
export default {
  name: 'UploadView'
}
</script>
