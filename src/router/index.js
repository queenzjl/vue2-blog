import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/components/common/common'
import SystemCommon from '@/components/common/systemCommon'

Vue.use(Router)

const articles = r => require.ensure([], () => r(require('../views/articles')), 'articles');
const artTypes = r => require.ensure([], () => r(require('../views/artTypes')), 'artTypes');
const aboutUs = r => require.ensure([], () => r(require('../views/aboutUs')), 'aboutUs');
const techSalon = r => require.ensure([], () => r(require('../views/techSalon')), 'techSalon');
const register = r => require.ensure([], () => r(require('../views/account/register')), 'register')
const login = r => require.ensure([], () => r(require('../views/account/login')), 'login')
const artDetail = r => require.ensure([], () => r(require('../views/articles/artDetail')), 'artDetail')
const article = r => require.ensure([], () => r(require('../views/system/article')), 'article')
const addArticle = r => require.ensure([], () => r(require('../views/system/addArticle.vue')), 'addArticle');
const artType = r => require.ensure([], () => r(require('../views/system/artType.vue')),'artType');
const addType = r => require.ensure([], () => r(require('../views/system/addType.vue')), 'addType');
const artTag = r => require.ensure([], () => r(require('../views/system/artTag.vue')), 'artTag');
const addTag = r => require.ensure([], () => r(require('../views/system/addTag.vue')), 'addTag');

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
    },
    {
      path: '/manage',
      component: SystemCommon,
      children: [
        {
          path: '/',
          component: article
        },
        {
          path: '/manage/article',
          component: article
        },
        {
          path: '/manage/addArticle',
          component: addArticle
        },
        {
          path: '/manage/artType',
          component: artType
        },
        {
          path: '/manage/addType',
          component: addType
        },
        {
          path: '/manage/artTag',
          component: artTag
        },
        {
          path: '/manage/addTag',
          component: addTag
        }
      ]
    }
  ]
})
