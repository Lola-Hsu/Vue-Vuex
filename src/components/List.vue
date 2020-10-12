<template>
  <div class="list__ul">
    <ul class="ul__menu">
      <li v-for="(item,index) in name" :key="index">
        <!-- {{item}} -->
        <router-link :to="{ name:item }">{{item}}</router-link>
      </li>
      <li class="options">
        <div>Options</div>
        <ul class="options__box">
          <li class="options1" @click="getRouterName()">
            <router-link :to="{ name: 'SlideShow' }">SlideShow</router-link>
          </li>
          <li class="options1" @click="getRouterName()">
            <router-link :to="{ name: 'Flipcard' }">Flipcard</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      title: "",
      name:[
        'HelloWorld',
        'Computed',
        'Ex1',
        'Fortest',
        'Filtertest',
        'KeyMidifiers',
        'Iftest',
        'Modeltest',
        'Ontest',
        'Eventbus',
        'Alert',
        'Emittest',
      ]
    };
  },
  methods: {
    getRouterName() {
      // console.log(this.$route)
      this.title = this.$route.name;
      // console.log(this.title)
      return this.$bus.$emit("title", this.title);
    },
    // toRouterPage(){
    //   router.push({path:'Ontest'})
    // }
  },
};
</script>

<style>
.list__ul {
  border-right: 1px solid black;
}

.ul__menu {
  width: 120px;
  height: 100%;
  text-align: center;
}

.ul__menu li {
  width: 100%;
  padding: 20px 0;
  list-style: none;
  cursor: pointer;
  color: palevioletred;
}

.ul__menu li a {
  width: 100%;
  height: 100%;
  display: block;
  /* border: 1px solid red; */
  text-decoration: none;
  color: palevioletred;
}

.ul__menu li:hover {
  background: rgb(247, 242, 175);
}

.options1 {
  display: none;
}

.options{
  position: relative;
}

.options:hover .options1 {
  display: block;
}

.options__box{
  width: 100%;
  position: absolute;
  right: -100%;
  top: -50%;
}
</style>