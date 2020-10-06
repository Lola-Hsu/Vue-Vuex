<template>
  <div>
      <h2>child component</h2>
      <button @click="sendMsgToParent()">點擊向父組件傳數據</button>
  </div>
</template>

<script>
export default {
    name:'Computed',
    data(){
        return{
            message: '子組件的data'
        }
    },
    methods:{
        sendMsgToParent(){
            //在子組件中使用$emit(eventName, data)來觸發一個自定義事件, 並傳遞一個參數
            this.$emit('listenToChildEvent', this.message);
        }
    }
}
</script>

<style>

</style>