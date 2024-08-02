// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import JSON from '../components/JSON.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: JSON
	}
	// Other routes can be added here
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
