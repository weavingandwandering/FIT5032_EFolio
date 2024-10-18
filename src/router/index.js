import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/View/HomeView.vue'
import AboutView from '../components/View/AboutView.vue'
import LoginView from '../components/View/LoginView.vue'
import FireBaseSignIn from '@/components/View/FireBaseSignIn.vue'
import FireBaseRegister from '@/components/View/FireBaseRegister.vue'
import LogoutView from '@/components/View/LogoutView.vue'
import AddBookView from '@/components/View/AddBookView.vue'
import BookList from '@/components/View/BookList.vue'
import GetBookCountView from '@/components/View/GetBookCountView.vue'
import WeatherView from '@/components/View/WeatherView.vue'

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
    name: FireBaseSignIn,
    component: FireBaseSignIn
  },
  {
    path: '/fireRegister',
    name: FireBaseRegister,
    component: FireBaseRegister
  },
  {
    path: '/logout',
    name: LogoutView,
    component: LogoutView,
  }, 
  {
    path: '/addbook',
    name: AddBookView,
    component: AddBookView,
  },
  {
    path: '/booklist',
    name: BookList,
    component: BookList,
  },
  {
    path: '/getbookcount',
    name: GetBookCountView,
    component: GetBookCountView
  }, 
  {
    path: '/weather',
    name: WeatherView,
    component: WeatherView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router