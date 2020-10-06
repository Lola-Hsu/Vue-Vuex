<template>
  <div>
    {{ message }}
    <a href="#" :title="hint" :data="hint">標題</a>
    <hr />
    <ul>
      <li><a :class="classList" href="">選項一</a></li>
      <li><a :style="styleList" href="">選項二</a></li>
      <li><a href="">選項三</a></li>
    </ul>
    <hr />
    <p>原始訊息:{{ message }}</p>
    <p>反轉訊息:{{ reverseMessage() }}</p>
    <hr />
    <p>fullName (computed) : {{ fullName }}</p>
    <p>fullName2 (computed) : {{ fullName2 }}</p>
    <p>fullNameCombined (watch) : {{ fullNameCombined }}</p>
    <hr />
    <p>now (computed) : {{ now }}</p>
    <p>getnow (methods) : {{ getNow() }}</p>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      message: "Nice to meet you",
      hint: "我是標題",
      firstName: "Bill",
      lastName: "Chen",
      fullNameCombined: "Bill Chen",
      classList: {
        active: true,
        hasError: true,
      },
      styleList: {
        color: "yellow",
        fontSize: "18px",
      },
    };
  },
  computed: {
    fullName: {
      get: function () {
        return this.firstName + "" + this.lastName;
      },
      // set: function () {
      //   let name = newValue.split("");
      //   this.firstName = name[0];
      //   this.lastName = name[name.length - 1];
      // },
    },
    fullName2: function () {
      return this.firstName + "" + this.lastName;
    },
    now: function () {
      return Date.now();
    },
  },
  watch: {
    // firstName: function (val) {
    //   this.fullNameCombined = this.firstName + " " + this.lastName;
    // },
    // lastName: function (val) {
    //   this.fullNameCombined = this.firstName + " " + this.lastName;
    // },
  },
  methods: {
    reverseMessage: function () {
      return this.message.split("").reverse().join("");
    },
    getNow: function () {
      return Date.now();
    },
  },
};
</script>

<style>
</style>