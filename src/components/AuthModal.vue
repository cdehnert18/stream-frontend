<script setup lang="ts">
import { login, register } from '../service/authService'
</script>

<template>
  <div
    class="modal fade"
    id="authModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="authModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="authModalLabel">
            {{ isLoginView ? 'Login' : 'Register' }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- Login Form -->
          <form v-if="isLoginView" @submit.prevent="handleLogin">
            <div class="mb-3">
              <label for="login-email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="login-email"
                v-model="loginForm.email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="login-password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="login-password"
                v-model="loginForm.password"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </form>

          <!-- Registration Form -->
          <form v-else @submit.prevent="handleRegistration">
            <div class="mb-3">
              <label for="register-email" class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="register-email"
                v-model="registerForm.email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="register-username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="register-username"
                v-model="registerForm.username"
                required
              />
            </div>
            <div class="mb-3">
              <label for="register-password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="register-password"
                v-model="registerForm.password"
                required
              />
            </div>
            <div class="mb-3">
              <label for="register-password-confirm" class="form-label">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="register-password-confirm"
                v-model="registerForm.passwordConfirm"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">Register</button>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-link" @click="toggleView">
            {{ isLoginView ? "Don't have an account? Register" : 'Already have an account? Login' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AuthModal',
  data() {
    return {
      isLoginView: true,
      loginForm: {
        email: '',
        password: ''
      },
      registerForm: {
        email: '',
        username: '',
        password: '',
        passwordConfirm: ''
      }
    }
  },
  methods: {
    toggleView() {
      this.isLoginView = !this.isLoginView
    },
    async handleLogin() {
      try {
        const response = await login(this.loginForm)
        console.log('Login successful:', response)

      } catch (error) {
        console.log('Login failed. Please check your credentials and try again');
      }
    },
    async handleRegistration() {
      try {
        const response = await register(this.registerForm)
        console.log('Registration successful:', response)

      } catch (error) {
        console.log('Registration failed. Please check your credentials and try again');
      }
    }
  }
}
</script>
