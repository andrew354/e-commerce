import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Product from "./components/Product.vue"
import Smartphone from "./components/Smartphone.vue"


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Product
    },

    {
      path: '/',
      name: 'Home',
      component: () => import('./views/AllProducts.vue')
    },
    {
      path: '/Allproducts',
      name: 'All Products',
      component: () => import('./views/AllProducts.vue')
    },
    {
      path: '/AllSmartphone',
      name: 'All Smartphone',
      component: () => import('./views/AllSmartphone.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})