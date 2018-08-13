import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/pages/Home')
const Search = () => import('@/pages/Search')
const Cate = () => import('@/pages/Categories')
const Radio = () => import('@/pages/Radio')
const Program = () => import('@/pages/Program')
const Player = () => import('@/pages/player/Player')
const NotFound = () => import('@/pages/404')

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
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
      path: '/radio',
      component: Radio
    },
    {
      path: '/program/:id',
      component: Program
    },
    {
      path: '/program/:id/chapter/:cid',
      name: 'player',
      component: Player,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
