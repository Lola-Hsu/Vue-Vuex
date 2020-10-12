<template>
  <div class="computed">
    <p>message : {{ message }}</p>
    <p>now: (computed) : {{ now }}</p>
    <p>getNow (method): {{ getNow() }}</p>
    <button @click="msg2">++</button>
    <p>{{ msg }}</p>
    <div class="computed__box"></div>
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
.computed__box{
  width: 200px;
  height: 200px;
  background: red;
  margin: 20px auto;
  padding: 10px;
}
</style>