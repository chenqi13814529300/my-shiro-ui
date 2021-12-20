// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import token from './token/token.js'
import API from './api'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$API=API
Vue.prototype.getToken = token.isLoginToken
Vue.prototype.setToken = token.setToken
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
