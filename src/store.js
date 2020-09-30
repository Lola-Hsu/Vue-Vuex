import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count:0
    },
    // 包含了多個直接更新state函式的物件
    mutations:{
        INCREMENT(state){
            state.count = state.count +1;
        },
        DECREMENT(state){
            state.count = state.count -1;
        }
    },
    // 當讀取屬性值時自動呼叫並返回屬性值
    getters:{
        evenOrOdd(state){
            return state.count %2 === 0 ? "偶數":"奇數";
        }
    },
    // 包含了多個對應事件回撥函式的物件
    actions:{
        incrementIfOdd({commit, state}){
            if(state.count %2 ===1){
                commit('INCREMENT')
            }
        },
        incrementAsync({commit}){
            setInterval(() =>{
                commit('INCREMENT')
            },2000)
        }
    }
})

export default store