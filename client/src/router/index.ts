import AuthView from '@/pages/AuthPage';
import HomeView from '@/pages/HomePage';
import TasksView from '@/pages/TasksView';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/auth',
			component: AuthView
		},
		{
			path: '/',
			component: HomeView,
			children: [
				{
					path: 'tasks',
					component: TasksView
				}
			]
		}
	]
});

export default router;
