import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ApplyPage from '../views/ApplyPage.vue';
import ProfilePage from '../views/ProfilePage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/apply', name: 'ApplyPage', component: ApplyPage },
  { path: '/profile', name: 'ProfilePage', component: ProfilePage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
