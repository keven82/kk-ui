import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './plugins/element.js'
import api from './http/index'
import i18n from './i18n'

Vue.config.productionTip = false
Vue.use(api)
import('./mock/index.js')
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
