<template>
  <div>
    <input href="#" type="text" @keyup.13="add" value="按 Enter +1" />
    <p>{{ counter }}</p>
    <hr />
    <input type="text" @keydown.f5="prompt" name="" id="" />
  </div>
</template>

<script>
export default {
  name: "KeyMidifiers",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    prompt() {
      alert("我是F5 !!");
    },
  },
};
</script>

<style>
</style>