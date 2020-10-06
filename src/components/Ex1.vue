<template>
   <div>
        <ul>
            <li :key="item.id" v-for='item in filteredFrouts'>{{item.name}}</li>
        </ul>
        <hr>
        <ul>
            <li :key="n" v-for='n in 10'>{{n}}</li>
            <li v-if='n % 2 === 1'> {{n}}</li>
        </ul>
        <hr>
        <div v-if='list.length !==0'>
            <div :key="item.id" v-for='item in list'>
            <div>{{item.name}}</div>
        </div>
        </div>
        <div v-else>
            Nothing could show.
        </div>
        <hr>解法:
        <div :key="item.id" v-for='item in list'>
            <div>{{item.name}}</div>
        </div>
        <div v-if='list.length ===0'>
            Nothing could show.
        </div>
   </div>
</template>

<script>
export default {
  name: "Ex1",
  data() {
    return {
      frouts: [
        {
          name: "Apple",
          count: 10,
        },
        {
          name: "Orange",
          count: 5,
        },
        {
          name: "Banana",
          count: 20,
        },
      ],
      list: [],
      n:''
    };
  },
  computed: {
    filteredFrouts: function () {
      return this.frouts.filter((item) => {
        return item.count > 6;
      });
    },
  },
};
</script>

<style>
</style>