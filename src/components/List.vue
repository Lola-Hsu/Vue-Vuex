<template>
  <div class="list__ul">
    <ul class="ul__menu">
      <li
        v-for="(item, index) in name"
        :key="index"
        @click="$router.push({ path: item })"
      >
        {{ item }}
      </li>
      <li class="options">
        <div>Options</div>
        <ul class="options__box">
          <li
            class="options1"
            v-for="(item, index) in dropdown"
            :key="index"
            @click="$router.push({ path: item })"
          >
            {{ item }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next((vm) => {
      vm.$router.replace(from.path);
    });
  },
  data() {
    return {
      title: "",
      name: [
        "HelloWorld",
        "Computed",
        "Ex1",
        "Fortest",
        "Filtertest",
        "KeyMidifiers",
        "Iftest",
        "Modeltest",
        "Ontest",
        "Eventbus",
        "Alert",
        "Emittest",
      ],
      dropdown: ["SlideShow", "Flipcard"],
    };
  },
};
</script>

<style>
.list__ul {
  width: 120px;
  height: calc(100vh - 120px);
  border-right: 1px solid black;
}

.ul__menu {
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

.options {
  position: relative;
}

.options:hover .options1 {
  display: block;
}

.options__box {
  width: 100%;
  position: absolute;
  right: -100%;
  top: -50%;
}
</style>