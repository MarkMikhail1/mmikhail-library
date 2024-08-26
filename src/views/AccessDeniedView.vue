<template>
    <div class="access-denied-container">
      <h2>Access Denied</h2>
      <p>You do not have permission to view this page. Please <router-link to="/login">login</router-link> to continue.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AccessDeniedView'
  };
  </script>
  
  <style scoped>
  .access-denied-container {
    text-align: center;
    margin-top: 50px;
  }
  
  .access-denied-container h2 {
    color: #d9534f;
  }
  
  .access-denied-container p {
    font-size: 1.2em;
  }
  </style>