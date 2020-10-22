<template>
  <div class="header">
    <h1 class="header__title">{{ title }}</h1>
    <div class="switch">
      <input class="switch__checkbox" type="checkbox" name="" id="checkbox" />
        <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      message: "111",
      title: "",
    };
  },
  methods: {
    getPath() {
      // console.log(this.$route.path)
      this.title = this.$route.path.slice(1);
    },
  },
  watch: {
    $route: "getPath",

    //監聽router變化時
    // $route(to){
    //   this.title = to.path.slice(1)
    // }
  },
};
</script>

<style>
.header {
  height: 120px;
  background: plum;
}

.header__title {
  /* width: 300px; */
  text-align: center;
  margin: auto auto;
  transform: translate(60px,40px);
}

.switch {
  width: 150px;
  height: 50px;
  background: rgb(151, 151, 151);
  position: relative;
  float: right;
  border-radius: 25px;
}

.switch__checkbox {
  width: 100%;
  height: 100%;
  position: absolute;
  /* display: none; */
}

span {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
  background: rgb(255, 0, 119);
}

.switch__checkbox:checked span {
  transform: translateX(150px);
  background-color: rgb(150, 25, 25);
}
</style>