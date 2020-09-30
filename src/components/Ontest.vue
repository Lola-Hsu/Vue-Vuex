<template>
  <div>
    <button type="button" @click="prompt">按我取的訊息</button>
    <div>{{ msg }}</div>
    <hr />
    <div @click="outer">
      <div @click="middle">
        <button type="button" @click.stop="inner">按我!</button>
      </div>
    </div>
    <hr />
    <a href="#" type="button" @click.prevent="prompt">按我取得訊息</a>
    <p>{{ msg }}</p>
    <hr />
    <div @click.capture="outer">
      <div @click.capture="middle">
        <button type="button" @click.capture="inner">按我!</button>
      </div>
    </div>
    <hr />
    <div @click.self="outer">
      <div @click.self="middle">
        <button @click="inner">按我！</button>
      </div>
    </div>
    <hr />
    <a href="#" type="button" @click.once="add">按我+1</a>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  name: "Ontest",
  data() {
    return {
      msg: "沒有發生任何事情!",
      counter: 0,
    };
  },
  methods: {
    prompt() {
      this.msg = "按鈕被按了, 監聽到 click 事件";
    },
    inner() {
      alert("這是裡面的button");
    },
    middle() {
      alert("這是中間的div");
    },
    outer() {
      alert("這是外面的div");
    },
    add() {
      this.counter++;
    },
  },
};
</script>

<style>
</style>