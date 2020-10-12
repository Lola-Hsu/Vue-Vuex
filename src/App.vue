<template>
  <div id="app">
    <Header />
    <div class="list">
      <List />
      <div class="list__content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";

export default {
  name: "App",
  components: {
    Header,
    List,
  },
  data() {
    return {
      list3: [
        [3, 4, 5],
        [6, 7, 8],
        [9, 0],
      ],
      fromChildData: "",
      childData: "",
    };
  },
  methods: {
    showMsgFromChild(data) {
      this.fromChildData = data;
    },
    showDataFromChild(data) {
      this.childData = data;
    },
    //vue-router 上一頁
    back() {
      // this.$router.back()
      this.$router.go(-1);
    },
    //vue-router 下一頁
    forword() {
      // this.$router.forword()
      this.$router.go(1);
    },
    //vue-router 指定跳轉頁面
    goPage() {
      this.$router.push("/Ex222");
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.list__content {
  padding-top: 40px;
  width: 100%;
  height: calc(100vh - 120px);
  text-align: center;
}
</style>
