import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// vuex
import store from './store/store'

// Vue-Router
import router from './router/router'

// i18n
import i18n from './I18n/I18n'

Vue.use(ElementUI)
Vue.config.productionTip = false

// event-bus
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  store,
  router,
  i18n
}).$mount('#app')
