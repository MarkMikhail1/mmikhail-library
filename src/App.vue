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
//import CountBookAPI from './views/CountBookAPI.vue';

export default {
  components: {
    BHeader,
    //CountBookAPI
  },
  computed: {
    showHeader() {
      return this.$route.name !== 'CountBookAPI';
    }
  }
};
</script>

<style>
/* Add your styles here */
</style>
