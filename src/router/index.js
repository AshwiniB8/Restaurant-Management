import Home from '../components/home.vue'
import SignUp from '../components/signUp.vue'
import Login from '../components/login.vue'
import Add from '../components/add.vue'
import Update from '../components/update.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Add',
    name: 'Add',
    component: Add
  },
  {
    path: '/Update/:id',
    name: 'Update',
    component: Update
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
