<template>
  <nav class="navbar navbar-expand">
    <div class="container">
      <a href="#" class="navbar-brand">stream</a>
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
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavigationComponent'
}
</script>
