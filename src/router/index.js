import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


import QuizOneView from '../views/QuizOneView.vue'
import QuizTwoView from '../views/QuizTwoView.vue'
import QuizThreeView from '../views/QuizThreeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/level1-quiz',
    name: 'level1-quiz',
    component: QuizOneView
  },
  {
    path: '/level2-quiz',
    name: 'level2-quiz',
    component: QuizTwoView
  },
  {
    path: '/level3-quiz',
    name: 'level3-quiz',
    component: QuizThreeView
  },
 
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
