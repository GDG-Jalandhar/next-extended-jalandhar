import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/attending',
      name: 'attending',
      component: () => import('./views/Attending.vue')
    },
    {
      path: '/speakers',
      name: 'speaker',
      component: () => import('./views/Speakers.vue')
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: () => import('./views/Agenda.vue')
    }
  ]
})
