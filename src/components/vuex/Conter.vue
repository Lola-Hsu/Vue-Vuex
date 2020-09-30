<template>
  <div>
      <h2>count:<span class="count">{{count}}</span></h2>
      <button @click="increase">+1</button>
      <button @click="decrease">-1</button>
  </div>
</template>

<script>

export default {
    name:"Conter",
    data(){
        return{
            count:0,
        }
    },
    methods: {
        increase(){
            this.count ++
        },
        decrease(){
            this.count --
        }
    },
    // computed:{
    //     count(){
    //         return this.$store.state.count
    //     }
    // }
}
</script>

<style>

</style>