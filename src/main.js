import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

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


Vue.use(ElementUI);
Vue.config.productionTip = false

//event-bus
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
