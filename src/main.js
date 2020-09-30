import Vue from 'vue'
import App from './App.vue'

import store from './store'

Vue.config.productionTip = false

//event-bus
Vue.prototype.$bus = new Vue();

//狀態變更
// store.commit('increment')
// console.log(store.state.count)

new Vue({
  render: h => h(App),
  //store機制
  store
}).$mount('#app')
