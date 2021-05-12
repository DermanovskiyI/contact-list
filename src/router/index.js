import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../views/HomePage.vue';
import Contact from '../views/Contact.vue';
import Add from '../views/Add.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
