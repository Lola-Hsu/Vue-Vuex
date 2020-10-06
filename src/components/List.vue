<template>
  <div>
    <ul class="list__ul">
      <li>
        <router-link :to="{ name: 'HelloWorld' }" ref="HelloWorld">HelloWorld</router-link>
      </li>
      <li><router-link :to="{ name: 'Computed' }" ref="Computed">Computed</router-link></li>
      <li><router-link :to="{ name: 'Ex1' }" ref="Ex1">Ex1</router-link></li>
      <li><router-link :to="{ name: 'Fortest' }" ref="Fortest">Fortest</router-link></li>
      <li>
        <router-link :to="{ name: 'Filtertest' }" ref="Filtertest">Filtertest</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'KeyMidifiers' }" ref="KeyMidifiers">KeyMidifiers</router-link>
      </li>
      <li><router-link :to="{ name: 'Iftest' }" ref="Iftest">Iftest</router-link></li>
      <li><router-link :to="{ name: 'Modeltest' }" ref="Modeltest">Modeltest</router-link></li>
      <li><router-link :to="{ name: 'Ontest' }" ref="Ontest">Ontest</router-link></li>
      <li><router-link :to="{ name: 'Eventbus' }" ref="Eventbus">Eventbus</router-link></li>
      <li><router-link :to="{ name: 'Alert' }" ref="Alert">Alert</router-link></li>
      <li><router-link :to="{ name: 'Emittest' }" ref="Emittest">Emittest</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
      console.log(this.$refs)
    this.$bus.$on("alert:message", (msg) => {
      this.showAlert(msg);
    });
  },
  methods: {
    showAlert(msg) {
      alert(msg);
    },
  },
};
</script>

<style>
.list__ul {
  width: 20%;
  height: 100%;
}

.list__ul li {
  /* margin: 20px 0; */
  width: 100%;
  padding: 20px 0;
  list-style: none;
}

.list__ul li a {
  width: 100%;
  padding: 20px 40px;
  cursor: pointer;
}

.list__ul li a:hover {
  background: gray;
}
</style>