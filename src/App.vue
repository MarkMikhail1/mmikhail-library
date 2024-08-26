<template>
  <div id="app">
    <header>
      <BHeader />
    </header>
    <main class="main-box">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import BHeader from './components/BHeader.vue';

export default {
  components: {
    BHeader
  }
};
</script>

<style>
/* Add your styles here */
</style>
