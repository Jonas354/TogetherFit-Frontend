import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Exercises from '@/views/Exercises.vue';

const routes = [
  {
    path: '/about',
    name: 'About',
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
