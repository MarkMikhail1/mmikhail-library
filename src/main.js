import { createApp } from 'vue';
import App from './App.vue';
//import router from './router/index.js';
//import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import bootstrap css

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App);

app.use(PrimeVue, {
	theme: {
		preset: Aura
	}
});

createApp(App).mount('#app');
