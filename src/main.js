import Vuex from 'vuex'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//event-bus
Vue.prototype.$bus = new Vue();

Vue.use(Vuex)

new Vue({
  render: h => h(App),
}).$mount('#app')
