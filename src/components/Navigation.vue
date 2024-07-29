<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/upload">Upload</router-link>
      </li>
      <li>
        <router-link to="/profile">Profile</router-link>
      </li>
      <li>
        <router-link to="/settings">Settings</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavigationComponent'
}
</script>
