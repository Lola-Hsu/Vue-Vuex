<template>
  <div class="header">
    <h1 class="header__title">{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      message: "111",
      title:''
    };
  },
  mounted(){
      // this.$bus.$on("title", (msg) => {
      //   return this.title = msg
      // });

      this.title = this.$route.name
      console.log(this.$route.name)
  },
  // beforeUpdate(){
  //   this.title = this.$route.name
  //   console.log(this.$route.name)
  // },
  // methods: {
  //   toRouterPage(){
  //     this.$router.push({path:'Ontest'})
  //   }
  // },
  // watch:{
  //   '$route': 'toRouterPage'
  // }
};
</script>

<style>
.header {
  height: 120px;
  background: plum;
}

.header__title{
    text-align: center;
    line-height: 120px;
}
</style>