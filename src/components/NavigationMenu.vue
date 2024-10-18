<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li v-if="isAuthenticated"><router-link to="/about">About</router-link></li>
      <li v-if="!isAuthenticated"><router-link to="/login">Login</router-link></li>
      <li v-if="isAuthenticated"><a href="#" @click="logout">Logout</a></li>
    </ul>
  </nav>
</template>

<script>
import { isAuthenticated } from '../router';

export default {
  name: 'NavigationMenu',
  setup() {
    const logout = () => {
      isAuthenticated.value = false;
    };

    return {
      isAuthenticated,
      logout
    };
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>