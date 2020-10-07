<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="msg" name="" id="" /><br />
    <textarea v-model="msg" name="" id="" cols="30" rows="10"></textarea><br />
    <input type="checkbox" v-model="group" value="1" name="" id="checkbox1" />
    <label for="checkbox1">複選框1</label>
    <input type="checkbox" v-model="group" value="2" name="" id="checkbox2" />
    <label for="checkbox2">複選框2</label>
    <input type="checkbox" v-model="group" value="3" name="" id="checkbox3" />
    <label for="checkbox3">複選框3</label>
    <div>group = {{ group }}</div>
    <hr />
    <input
      type="radio"
      v-model="selected"
      value="我是選項1"
      id="radio1"
    /><label for="radio1">單選框1</label>
    <input
      type="radio"
      v-model="selected"
      value="我是選項'"
      id="radio2"
    /><label for="radio2">單選框2</label>
    <input
      type="radio"
      v-model="selected"
      value="我是選項3"
      id="radio3"
    /><label for="radio3">單選框3</label>
    <div>selected = {{ selected }}</div>
    <hr />
    <select name="" id="" v-model="option" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <div>option : {{ option }}</div>
    <hr />
    <a href="#" :title="hint" :data="hint">標題</a>
    <hr />
    <ul>
      <li><a :class="classList" href="">選項一</a></li>
      <li><a :style="styleList" href="">選項二</a></li>
      <li><a href="">選項三</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      hint: "這裡是標題",
      classList: {
        active: true,
        hasError: true,
      },
      styleList: {
        color: "yellow",
        fontSize: "18px",
      },
      toggle: false,
      group: [],
      selected: "尚未選擇",
      option: [],
    };
  },
  props: {
    msg: String,
  },
  beforecreate() {
    // console.log("Child Beforecreate");
  },
  created() {
    // console.log("Child Created");
  },
  beforeMount() {
    // console.log("Child BeforeMount");
  },
  mounted() {
    // console.log("Child Mounted");
  },
  beforeUpdate() {
    // console.log("Child BeforeUpdate");
  },
  updated() {
    // console.log("Child Updated");
  },
  activated() {
    // console.log("Child Activated");
  },
  deactivated() {
    // console.log("Child Deactivated");
  },
  beforeDestroy() {
    // console.log("Child BeforeDestroy");
  },
  destroyed() {
    // console.log("Child Destroyed");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
