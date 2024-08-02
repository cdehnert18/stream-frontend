<template>
  <div class="container my-5 min-vh-100">
    <h1 class="mb-4">Profile</h1>

    <!-- Username Section -->
    <div class="row mb-4">
      <div class="col-md-8 my-3 my-sx-3 my-sm-3 my-md-0">
        <label for="username" class="form-label">Username</label>
        <input type="text" id="username" v-model="profile.username" class="form-control" readonly />
      </div>
      <div class="col-md-4 d-flex align-items-end">
        <button class="btn btn-primary w-100">Edit</button>
      </div>
    </div>

    <!-- Password Section -->
    <div class="mb-4">
      <h4>Change Password</h4>
      <form>
        <div class="mb-3">
          <label for="current-password" class="form-label">Current Password</label>
          <input
            type="password"
            id="current-password"
            v-model="profile.currentPassword"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label for="new-password" class="form-label">New Password</label>
          <input
            type="password"
            id="new-password"
            v-model="profile.newPassword"
            class="form-control"
            required
          />
        </div>
        <div class="mb-3">
          <label for="confirm-new-password" class="form-label">Confirm New Password</label>
          <input
            type="password"
            id="confirm-new-password"
            v-model="profile.newPasswordConfirm"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-success w-100">Update Password</button>
      </form>
    </div>

    <!-- Spacer to push the delete button to the bottom -->
    <div class="row">
      <div class="col">
        <div class="flex-grow-1"></div>
      </div>
    </div>

    <!-- Delete Account Section -->
    <div class="mt-4 mb-2">
      <button class="btn btn-danger w-100">Delete Account</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProfileView',
  data() {
    return {
      profile: {
        username: 'MaxMuster',
        currentPassword: 'dummy',
        newPassword: 'dummy',
        newPasswordConfirm: 'dummy'
      }
    }
  }
}
</script>
