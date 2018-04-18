import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/components/common/common'

Vue.use(Router)

const articles = r => require.ensure([], () => r(require('../views/articles')), 'articles');
const artTypes = r => require.ensure([], () => r(require('../views/artTypes')), 'artTypes');
const aboutUs = r => require.ensure([], () => r(require('../views/aboutUs')), 'aboutUs');
const techSalon = r => require.ensure([], () => r(require('../views/techSalon')), 'techSalon');
const register = r => require.ensure([], () => r(require('../views/account/register')), 'register')
const login = r => require.ensure([], () => r(require('../views/account/login')), 'login')
const artDetail = r => require.ensure([], () => r(require('../views/articles/artDetail')), 'artDetail')
export default new Router({
  routes: [
    {
      path: '/',
      component: Common,
      children: [
        {
          path: '/',
          component: articles
        },
        {
          path: '/articles',
          component: articles
        },
        {
          path: '/articles/:id',
          name: 'artDetail',
          component: artDetail
        },
        {
          path: '/artTypes',
          component: artTypes
        },
        {
          path: '/aboutUs',
          component: aboutUs
        },
        {
          path: '/techSalon',
          component: techSalon
        },
        {
          path: '/user/register',
          component: register
        },
        {
          path: '/user/login',
          component: login
        }
      ]
    }
  ]
})
