import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/main/vue/'
  },
  {
    path: '/main/vue/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main/vue/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/",
  routes
})

export default router