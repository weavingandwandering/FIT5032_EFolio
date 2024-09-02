import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/View/HomeView.vue'
import AboutView from '../components/View/AboutView.vue'
import LoginView from '../components/View/LoginView.vue'
import FireBaseSignIn from '@/components/View/FireBaseSignIn.vue'

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
  },
  {
    path: '/fireLogin',
    name: FireLogin,
    component: FireBaseSignIn
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router