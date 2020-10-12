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
  watch:{
    //監聽router變化時
    $route(to){
      // console.log(to.path.slice(1))
      this.title = to.path.slice(1)
    }
  }
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