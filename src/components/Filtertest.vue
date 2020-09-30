<template>
  <div>
    <!-- <div>{{ price | commaFormat | priceFormat }}</div>
    <hr /> -->
    <button @click='sendDataToFather'>sendDataToFather</button>
  </div>
</template>

<script>
export default {
  name: "Filter11",
  data() {
    return {
      price: 9999999,
    };
  },
  Filters: {
    priceFormat: function (value) {
      return "$" + value;
    },
    commaFormat: function (value) {
      return value
        .toString()
        .replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/, function (
          all,
          pre,
          groupOf3Digital
        ) {
          return pre + groupOf3Digital.replace(/\d{3}/g, ",$&");
        });
    },
  },
  methods:{
    sendDataToFather(){
      this.$emit('callDataToFather', this.price);
    }
  }
};
</script>

<style>
</style>