<template>
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <h1 class="text-center">Login</h1>
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" id="username" v-model="username" />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" v-model="password" />
            </div>
            <div v-if="errorMessage" class="text-danger text-center">{{ errorMessage }}</div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary me-2">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { isAuthenticated } from '../router';
  
  export default {
    setup() {
      const username = ref('');
      const password = ref('');
      const errorMessage = ref('');
      const router = useRouter();
  
      const handleLogin = () => {
        const hardcodedUsername = 'user';
        const hardcodedPassword = 'password';
  
        if (username.value === hardcodedUsername && password.value === hardcodedPassword) {
          isAuthenticated.value = true;
          errorMessage.value = '';
          router.push({ name: 'About' });
        } else {
          errorMessage.value = 'Invalid username or password';
          router.push({ name: 'AccessDenied' });
        }
      };
  
      return {
        username,
        password,
        errorMessage,
        handleLogin
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    margin-top: 50px;
  }
  
  .form-control:focus {
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .text-danger {
    margin-top: 10px;
  }
  </style>