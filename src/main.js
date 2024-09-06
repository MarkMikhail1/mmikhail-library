// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDcC54SqAJjQqe2qrV5EYviNT7IcBFQaNE',
	authDomain: 'week7-mark.firebaseapp.com',
	projectId: 'week7-mark',
	storageBucket: 'week7-mark.appspot.com',
	messagingSenderId: '244995469352',
	appId: '1:244995469352:web:3d337d5e487f1b0d5c851d'
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
app.use(PrimeVue, { theme: { preset: Aura } });
app.use(router);

app.mount('#app');
