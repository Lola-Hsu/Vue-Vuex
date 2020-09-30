<template>
  <div>
    <div v-if="isShow">條件成立</div>
    <div v-else>條件不成立</div>
    <hr />
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else>C</div>
    <hr />
    <div v-if="isShow">
      <input
        type="text"
        key="123456789"
        placeholder="條件成立時的提示文字"
        name=""
        id=""
      />
    </div>
    <div v-else>
      <input
        type="text"
        key="987654321"
        placeholder="條件不成立時的提示文字"
        name=""
        id=""
      />
    </div>
    <button @click="toggle">切換顯示條件</button>
    <hr />
    <div v-show="isShow">條件成立</div>
  </div>
</template>

<script>
export default {
  name: "Iftest",
  data() {
    return {
      isShow: true,
      type: "B",
    };
  },
  methods: {
    toggle: function () {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style>
</style>