import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
//import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import bootstrap css

createApp(App).use(router).mount('#app');
