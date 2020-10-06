<template>
  <div>
    <button type="submit">
      <!-- 可預設, 也可設空值 -->
      <slot>ok</slot>
    </button>

    <h1><slot name="name"></slot></h1>
    <span><slot name="price"></slot> </span>
    <p><slot name="material"></slot></p>
  </div>
</template>

<script>
export default {
  name: "Slottest",
  data() {
    return {};
  },
};
</script>

<style>
</style>