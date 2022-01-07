import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Exercises from '@/views/Exercises.vue';

const routes = [
  {
    path: '/',
    name: 'TogetherFit',
    component: About,
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: Exercises,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes,
});

export default router;
