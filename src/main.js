import Vue from 'vue'
import App from './App.vue'

//引用資料夾，預設會先找index.js
import store from './store'

// Vue-Router
import router from './router'

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
