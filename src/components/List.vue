<template>
  <div class="list__ul">
    <ul class="ul__menu">
      <li @click="getRouterName()">
        <router-link :to="{ name: 'HelloWorld' }">HelloWorld</router-link>
      </li>
      <li @click="getRouterName()">
        <router-link :to="{ name: 'Computed' }">Computed</router-link>
      </li>
      <li @click="getRouterName()">
        <router-link :to="{ name: 'Ex1' }">Ex1</router-link>
      </li>
      <li @click="getRouterName()">
        <router-link :to="{ name: 'Fortest' }">Fortest</router-link>
      </li>
      <li @click="getRouterName()">
        <router-link :to="{ name: 'Filtertest' }">Filtertest</router-link>
      </li>
      <li @click="getRouterName()">
        <router-link :to="{ name: 'KeyMidifiers' }">KeyMidifiers</router-link>
      </li>
      <li @click="getRouterName()">
        <router-link :to="{ name: 'Iftest' }">Iftest</router-link>
      </li>
      <li @click="getRouterName()">
        <router-link :to="{ name: 'Modeltest' }">Modeltest</router-link>
      </li>
      <li @click="getRouterName()">
        <router-link :to="{ name: 'Ontest' }">Ontest</router-link>
      </li>
      <li @click="getRouterName()">
        <router-link :to="{ name: 'Eventbus' }">Eventbus</router-link>
      </li>
      <li @click="getRouterName()">
        <router-link :to="{ name: 'Alert' }">Alert</router-link>
      </li>
      <li @click="getRouterName()">
        <router-link :to="{ name: 'Emittest' }">Emittest</router-link>
      </li>
      <li class="options">
        <a href="#">Options</a>
        <ul>
          <li class="options1" @click="getRouterName()">
            <router-link :to="{ name: 'SlideShow' }">SlideShow</router-link>
          </li>
          <li class="options1" @click="getRouterName()">
            <router-link :to="{ name: 'SlideShow' }">SlideShow</router-link>
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
    };
  },
  methods: {
    getRouterName() {
      // console.log(this.$route)
      this.title = this.$route.name;
      // console.log(this.title)
      return this.$bus.$emit("title", this.title);
    },
  },
};
</script>

<style>
.list__ul {
  padding: 0;
  margin: 0;
  border-right: 1px solid black;
}

.ul__menu {
  margin: 0;
  padding: 0;
  width: 20%;
  height: 100%;
}

.ul__menu li {
  margin: 0;
  width: 100%;
  padding: 20px 0;
  list-style: none;
}

.ul__menu li a {
  width: 100%;
  padding: 20px 40px;
  cursor: pointer;
  text-decoration: none;
}

.ul__menu li a:hover {
  background: rgb(247, 242, 175);
}

.options1{
  display: none;
}

.options:hover > ul{
  display: block;
}
</style>