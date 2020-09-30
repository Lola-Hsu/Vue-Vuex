<template>
  <div id="app">
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

    <Conter />
  
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Computed from "./components/Computed";
// import Ex1 from "./components/Ex1"
// import Filtertest from "./components/Filtertest"
// import KeyMidifiers from "./components/keyMidifiers"
// import Fortest from "./components/Fortest";
// import Iftest from "./components/Iftest"
// import Modeltest from "./components/Modeltest"
// import Ontest from "./components/Ontest"
// import Emittest from "./components/Emittest"
// import Eventbus from "./components/Eventbus"
// import Alert from "./components/Alert"

import Conter from "./components/vuex/Conter"

export default {
  name: "App",
  components: {
    // Eventbus,
    // 註冊元件
    // Alert,
    // 子傳父
    // Emittest,

    // ----------------

    Conter
  },
  data() {
    return {
      list3: [
        [3, 4, 5],
        [6, 7, 8],
        [9, 0],
      ],
      fromChildData:'',
      childData:''
    };
  },
  methods:{
    showMsgFromChild(data){
      this.fromChildData = data
    },
    showDataFromChild(data){
      this.childData = data
    },
    increment(){
      //store狀態變更
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  },
  beforecreate() {
    console.log("Father Beforecreate");
  },
  created() {
    console.log("Father Created");
    this.increment()
  },
  beforeMount() {
    console.log("Father BeforeMount");
  },
  mounted() {
    console.log("Father Mounted");
  },
  beforeUpdate() {
    console.log("Father BeforeUpdate");
  },
  Updated() {
    console.log("Father Updated");
  },
  activated() {
    console.log("Father Activated");
  },
  deactivated() {
    console.log("Father Deactivated");
  },
  beforeDestroy() {
    console.log("Father BeforeDestroy");
  },
  destroyed() {
    console.log("Father Destroyed");
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
