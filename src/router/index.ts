import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/pages/Home.vue'
import ContactMe from '../views/pages/ContactMe.vue'
import Education from '../views/pages/Education.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/ContactMe',
    name: 'ContactMe',
    component: ContactMe
  },
  {
    path: '/Education',
    name: 'Education',
    component: Education
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
