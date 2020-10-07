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
      this.$bus.$on("title", (msg) => {
        // console.log(msg);
        return this.title = msg
      });
  },
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