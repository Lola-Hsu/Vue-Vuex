<template>
  <div class="header">
    <h1 class="header__title">{{title}}</h1>
    <div class="header__switch">
      <input class="switch__checkbox" type="checkbox" name="" id="checkbox">
      <label class="switch__label" for="checkbox">
        <span class="label__button"></span>
      </label>
    </div>
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
  methods: {
    getPath(){
      // console.log(this.$route.path)
      this.title = this.$route.path.slice(1)
    }
  },
  watch:{
    '$route':'getPath'
    
    //監聽router變化時
    // $route(to){
    //   this.title = to.path.slice(1)
    // }
  }
};
</script>

<style>
.header {
  height: 120px;
  background: plum;
}

.header__title{
  width: 300px;
  text-align: center;
  margin: auto auto;
}

.header__switch{
  width: 150px;
  height: 50px;
  /* background: burlywood; */
  flex-grow: 0;
  position: relative;
  float: right;
}

.switch__checkbox{
  width: 100%;
  height: 100%;
  position: absolute;
  /* visibility: hidden; */
}

.switch__label{
  width: 100%;
  height: 100%;
  background: rgb(134, 130, 130);
  display: block;
  border-radius: 30%;
}

.label__button{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
  background: rgb(0, 255, 191);
}

.switch__checkbox:checked .label__button{
    transform: translate(150px, 0);
}
</style>