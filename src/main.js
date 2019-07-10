import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import './plugins/element.js'
import api from './http/index'

Vue.config.productionTip = false
Vue.use(api)
import('./mock/index.js')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
