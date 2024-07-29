<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6">
        <div class="comment-card card shadow-sm my-3">
          <div class="card-body">
            <p class="card-text">{{ comment }}</p>
            <div class="d-flex justify-content-between align-items-end mt-3">
              <div class="user-name text-muted">{{ username }}</div>
              <div class="comment-timestamp text-muted">{{ timestamp }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CommentComponent',
  data() {
    return {
      comment:
        'Lorem ipsum odor amet, consectetuer adipiscing elit. Penatibus class vel scelerisque quisque curabitur fames in fringilla.' +
        'Purus nisl nascetur vehicula felis varius sapien. Quisque sem suscipit; vel sagittis rutrum dapibus.',
      username: 'Max Mustermann',
      timestamp: '21:42 12.04.2021'
    }
  }
}
</script>
