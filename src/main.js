import Vue from 'vue'
import App from './App.vue'

//vuex
import store from './store/store'

// Vue-Router
import router from './router/router'

//vue-Mixin
// Vue.mixin({
//   created:function(){
//     console.log('im global mixin')
//   }
// })


Vue.config.productionTip = false

//event-bus
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
