<template>
  <nav class="navbar navbar-expand w-100">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">stream</a>

      <!-- Search Bar -->
      <input
        class="form-control me-4 flex-grow-1"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />

      <!-- Navigation Links -->
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
        <li class="nav-item">
          <button class="btn btn-outline-primary mx-2" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Login</button>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
export default {
  name: 'NavigationComponent'
}
</script>
