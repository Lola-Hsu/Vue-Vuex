<template>
  <div>
    <p>message : {{ message }}</p>
    <p>now: (computed) : {{ now }}</p>
    <p>getNow (method): {{ getNow() }}</p>
    <button @click="msg2">++</button>
    <p>{{ msg }}</p>
  </div>
</template>


<script>
export default {
  name: "Computed",
  data() {
    return {
      message: 125,
    };
  },
  computed: {
    now: function () {
      if (this.message);
      return Date.now();
    },
  },
  methods: {
    getNow: function () {
      return Date.now();
    },
    msg2() {
      this.message++;
    },
  },
  props: {
    msg: String,
  },
};
</script>

<style>
</style>