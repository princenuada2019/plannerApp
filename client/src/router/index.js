import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage'
import Login from '../views/Authentication/Login'
import Signup from '../views/Authentication/Signup'
import Dashboard from '../views/Dashboard/Dashboard'
import FullWeek from '../views/Dashboard/FullWeek'
import Notes from '../views/Dashboard/Notes'
import Today from '../views/Dashboard/Today'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: LandingPage,
    name: 'landingPage'
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        component: FullWeek,
        name: 'fullWeek'
      },
      {
        path: 'today',
        component: Today,
        name: 'today'
      },
      {
        path: 'notes',
        component: Notes,
        name: 'notes'
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/signup',
    component: Signup,
    name: 'signup'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
