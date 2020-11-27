import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create',
      name: 'create',
      // route level code-splitting
      // this generates a separate chunk (create.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "create" */ './views/Create.vue')
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
    {
      path: '/updates',
      name: 'updates',
      component: () => import(/* webpackChunkName: "updates" */ './views/Updates.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue')
    },
    {
      path: '/story',
      name: 'story',
      props: true,
      component: () => import(/* webpackChunkName: "story" */ './views/Story.vue')
    },
    {
      path: '/product',
      name: 'product',
      props: true,
      component: () => import(/* webpackChunkName: "product" */ './views/Product.vue')
    },
  ]
})
