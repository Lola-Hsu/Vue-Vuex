<template>
  <div></div>
</template>
<script>
export default {
  name: 'Alert',
  created () {
    // 註冊監聽一個alert:message事件
    this.$bus.$on('alert:message', (msg) => {
      this.showAlert(msg)
    })
    this.$bus.$on('stopAlertBus', () => {
      this.stopAlertBus()
    })
    // 只監聽一次
    this.$bus.$once('onceBus', () => {
      console.log('I only execute once')
    })
  },
  methods: {
    showAlert (msg) {
      alert(msg)
    },
    stopAlertBus () {
      // 停止監聽alert:message事件
      this.$bus.$off('alert:message')
    }
  },
  beforeDestroy () {
    // 組件銷毀前要註銷監聽事件
    this.$bus.$off('alert:message')
  }
}
</script>
<style>
</style>
