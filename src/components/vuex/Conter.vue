<template>
  <div>
      <h2>count:<span class="count">{{count}}</span></h2>
      <button @click="actionIncrease">+1</button>
      <button @click="actionDecrease">-1</button>
  </div>
</template>

<script>

// mapActions 在 computed 中使用，提取 action 函式的方法，使用函式名稱
// mapGetters 在 methods 中使用，提取 getter 函式的方法，可以利用物件 key: value 方式取別名
import {mapGetters, mapActions} from "vuex"

export default {
    name:"Conter",
    computed:{
        ...mapGetters({
            count: "getCount",
        }),
    },
    methods: {
        ...mapActions([
            "actionIncrease",
            "actionDecrease",
        ]),
        callAction(){
            this.actionIncrease;
        }
    },
}
</script>

<style>

</style>