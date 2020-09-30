import vue from 'vue'
import vuex from 'vuex'
import {state, mutations} from './mutations'
import * as getters from './getter'
import * as actions from './action'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,

    //嚴格模式，禁止直接修改state
    strict:true
})