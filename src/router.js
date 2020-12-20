import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Note',
      name: 'Note',
      component: () => import(/* webpackChunkName: "note" */ './views/Note.vue')
    },
    {
      path: '/Account',
      name: 'Account',
      component: () => import(/* webpackChunkName: "About" */ './views/Account.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import(/* webpackChunkName: "About" */ './views/About.vue')
    },
    {
      path: '/Schedule',
      name: 'Schedule',
      component: () => import(/* webpackChunkName: "categories" */ './views/Schedule.vue')
    },
    // {
    //   path: '/twitter',
    //   name: 'twitter',
    //   props: true,
    //   component: () => import(/* webpackChunkName: "story" */ './views/Twitter.vue')
    // },
    // {
    //   path: '/facebook',
    //   name: 'facebook',
    //   props: true,
    //   component: () => import(/* webpackChunkName: "product" */ './views/Facebook.vue')
    // },
    // {
    //   path: '/linkedin',
    //   name: 'linkedin',
    //   props: true,
    //   component: () => import(/* webpackChunkName: "product" */ './views/Linkedin.vue')
    // },
    {
      path: '/form',
      name: 'form',
      props: true,
      component: () => import(/* webpackChunkName: "product" */ './views/Form.vue')
    },
    {
      path: '/viewer',
      name: 'viewer',
      props: true,
      component: () => import('./views/Viewer.vue')
    },
  ]
})
