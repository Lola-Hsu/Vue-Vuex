<template>
  <div>
    {{ message }}
    <input type='text' v-model.lazy='message' name='' id='' />
    <hr />
    <input type='text' v-model.number='count' name='' id='' />
    <div>{{ count }}</div>
    <div>{{ type }}</div>
    <hr />
    <input type='text' v-model.trim='message' name='' id='' />
    <hr />
    <p>請輸入使用者名稱</p>
    <input type='text' v-model='userName' name='' id='' />
    <p>{{ errMsg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Modeltest',
  data () {
    return {
      message: '123',
      count: 0,
      type: '',
      userName: '',
      errMsg: ''
    }
  },
  watch: {
    count: function (val) {
      this.type = typeof val
    },
    userName: function (value) {
      if (this._valid(value)) {
        this.errMsg = '使用者名稱開頭不可為數字'
      } else {
        this.errMsg = '合法的使用者名稱'
      }
    }
  },
  methods: {
    _valid: function (name) {
      return /^[0-9]/.test(name)
    }
  }
}
</script>

<style>
</style>
