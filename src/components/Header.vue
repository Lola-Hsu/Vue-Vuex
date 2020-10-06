<template>
  <div class="header">
      <h1 @click="doShowAlert(message)">Click Me</h1>
  </div>
</template>

<script>
export default {
    name:'Header',
    data(){
        return{
            message: '111'
        }
    },
    methods: {
        doShowAlert(msg){
            this.$bus.$emit('alert:message', msg)
        }
    }
}
</script>

<style>
    .header{
        height: 120px;
        background: plum;
    }
</style>