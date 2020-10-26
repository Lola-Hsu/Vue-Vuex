<template>
  <div>
      <h2>This is EventBus !!!!</h2>
      <button @click='doShowAlert(message)'>開始監聽</button>
      <button @click='stopAlertBus()'>停止監聽</button>
      <button @click='onceBus()'>只監聽一次</button>
  </div>
</template>

<script>
export default {
  name: 'EventBus',
  data () {
    return {
      message: '這裡是Eventbus.vue的訊息'
    }
  },
  methods: {
    // 把事件送出去
    doShowAlert (msg) {
      this.$bus.$emit('alert:message', msg)
    },
    stopAlertBus () {
      this.$bus.$emit('stopAlertBus')
    },
    onceBus () {
      this.$bus.$emit('onceBus')
    }
  }
}
</script>
<style>
</style>
