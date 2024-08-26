import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/View/HomeView.vue'
import AboutView from '../components/View/AboutView.vue'
import LoginView from '../components/View/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },

  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router