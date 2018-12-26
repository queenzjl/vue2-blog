// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import './mock/mock'
import axios from 'axios'
import globalConfigUrl from './config/baseUrl'
import Global from './config/global';

axios.defaults.baseURL = globalConfigUrl.baseUrl

Vue.use(elementUI)
Vue.config.productionTip = false;

Vue.prototype.GLOBAL = Global;  //挂载到Vue实例上面


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
