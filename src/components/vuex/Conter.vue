<template>
  <div>
      <h2>count:<span class="count">{{count}}</span></h2>

      Set Number:
      <input type="number" v-model="num">
      <button @click="actionIncrease(num)">+ {{num}}</button>
      <button @click="actionDecrease(num)">- {{num}}</button>

      <button @click="actionCountReset">歸零</button>
  </div>
</template>

<script>

// mapActions 在 computed 中使用，提取 action 函式的方法，使用函式名稱
// mapGetters 在 methods 中使用，提取 getter 函式的方法，可以利用物件 key: value 方式取別名
import {mapGetters, mapActions} from "vuex"

export default {
    name:"Conter",
    data(){
        return{
            num:1
        }
    },
    computed:{
        ...mapGetters({
            count: "getCount",
        }),
    },
    methods: {
        ...mapActions([
            "actionIncrease", //加數
            "actionDecrease", //減數
            "actionCountReset" //歸零
        ]),
    },
}
</script>

<style>

</style>