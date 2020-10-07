<template>
  <div id="app">
    <Header />
    <div class="list">
      <List />
      <div class="list__content">
        <router-view></router-view>
      </div>
    </div>

    <!-- <Slot>
      <template v-slot:name> 1111 </template>
      <template v-slot:price> 2222 </template>
      <template v-slot:material> 3333 </template>
    </Slot> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App1122" /> -->
    <!-- <Computed msg="傳到子元件" /> -->
    <!-- <Ex1 /> -->
    <!-- <Fortest :list3=list3 /> -->

    <!-- <Filtertest @callDataToFather='showDataFromChild' />
    <div>{{childData}}</div>
    <hr> -->

    <!-- <KeyMidifiers /> -->
    <!-- <Iftest /> -->
    <!-- <Modeltest /> -->
    <!-- <Ontest /> -->

    <!-- 發送事件 -->
    <!-- <Eventbus /> -->
    <!-- 建立bus, 監聽事件 -->
    <!-- <Alert /> -->

    <!-- <hr>
    <h1>子傳父emit</h1>
    <Emittest @listenToChildEvent='showMsgFromChild' />
    <p>來自於子組件的數據為:{{fromChildData}}</p>
    <hr> -->

    <!-- ---vuex---------------------------------------------------------------------- -->

    <!-- <Conter />
    <hr>
    <router-view></router-view>
    <router-link :to="{name:'Test'}">Test</router-link>
    <a href=""></a>
    <button @click="back()">上一頁</button> <button @click="forword()">下一頁</button>
    <button @click="goPage()">指地跳轉頁</button> -->
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
// import HelloWorld from "./components/HelloWorld.vue";
// import Computed from "./components/Computed";
// import Ex1 from "./components/Ex1";
// import Filtertest from "./components/Filtertest"
// import KeyMidifiers from "./components/keyMidifiers"
// import Fortest from "./components/Fortest";
// import Iftest from "./components/Iftest"
// import Modeltest from "./components/Modeltest"
// import Ontest from "./components/Ontest"
// import Emittest from "./components/Emittest"
// import Eventbus from "./components/Eventbus"
// import Alert from "./components/Alert"

// import Conter from "./components/vuex/Conter"
// import Slot from "./components/Slottest";

export default {
  name: "App",
  components: {
    Header,
    List,
    // Eventbus,
    // 註冊元件
    // Alert,
    // 子傳父
    // Emittest,

    // ----------------
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
  beforecreate() {
    // console.log("Father Beforecreate");
  },
  created() {
    // console.log("Father Created");
  },
  beforeMount() {
    // console.log("Father BeforeMount");
  },
  mounted() {
    // console.log("Father Mounted");
  },
  beforeUpdate() {
    // console.log("Father BeforeUpdate");
  },
  Updated() {
    // console.log("Father Updated");
  },
  activated() {
    // console.log("Father Activated");
  },
  deactivated() {
    // console.log("Father Deactivated");
  },
  beforeDestroy() {
    // console.log("Father BeforeDestroy");
  },
  destroyed() {
    // console.log("Father Destroyed");
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}

.list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.list__content {
  padding-top: 40px;
  width: 80%;
  height: 100%;
  text-align: center;
}
</style>
