import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/pages/home')
const Search = () => import('@/pages/search')
const Cate = () => import('@/pages/categories')
const NotFound = () => import('@/pages/404')

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/categories',
      component: Cate
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
