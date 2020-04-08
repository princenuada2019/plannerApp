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
    name: 'LandingPage'
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        component: Today,
        name: 'Today'
      },
      {
        path: 'today',
        component: Today,
        name: 'Today '
      },
      {
        path: 'fullweek',
        component: FullWeek,
        name: 'FullWeek'
      },
      {
        path: 'notes',
        component: Notes,
        name: 'Notes'
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
